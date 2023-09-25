import { readFileSync } from 'node:fs'
import path from 'node:path'
import { emojiList } from '../db/SupportedEmojis.js'

export const readJson = (pathToFile) => {
  const filePath = path.join(process.cwd(), pathToFile)
  const fileContent = readFileSync(filePath, 'utf8')
  return JSON.parse(fileContent)
}

export const isEmoji = (emoji) => {
  const emojiRegex = /[\u{1F000}-\u{1F6FF}]/u
  return emojiRegex.test(emoji)
}

export const getHexValue = (strParam) => {
  if (isEmoji(strParam)) {
    // return strParam.codePointAt(0).toString(16)
    return emojiList.find(emoji => emoji.emoji === strParam).hexValue
  }

  if (strParam.startsWith('U+')) {
    return strParam.slice(2).toLowerCase()
  }

  return strParam.toLowerCase()

}
