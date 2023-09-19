import { readJSON } from '../db/utils.js'

const supportedEmojis = readJSON('./supported_emojis.json')
const mixes = readJSON('./emoji_mixes.json')

export class EmojiMixReader {

  static getRandomMix () {
    const randomIndex = Math.floor(Math.random() * supportedEmojis.length)
    const randomEmoji = supportedEmojis[randomIndex].unicode
    const emojiMixes = mixes[0][randomEmoji]

    return emojiMixes[Math.floor(Math.random() * emojiMixes.length)]
  }

}
