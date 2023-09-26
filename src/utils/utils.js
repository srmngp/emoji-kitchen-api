import { readFileSync } from 'node:fs'
import path from 'node:path'
import { emojiList } from '../db/SupportedEmojis.js'

export const readJson = (pathToFile) => {
  const filePath = path.join(process.cwd(), pathToFile)
  const fileContent = readFileSync(filePath, 'utf8')
  return JSON.parse(fileContent)
}

export const isSupportedEmoji = (emoji) => {
  return emojiList.some(emojiObj => emojiObj.emoji === emoji)
}

export const getHexValue = (strParam) => {
  if (isSupportedEmoji(strParam)) {
    return emojiList.find(emoji => emoji.emoji === strParam).hexValue
  }

  if (strParam.startsWith('U+')) {
    return strParam.slice(2).toLowerCase()
  }

  return strParam.toLowerCase()

}
