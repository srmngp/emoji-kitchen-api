import { readJSON } from '../utils/utils.js'

const supportedEmojis = readJSON('../db/supported_emojis.json')
const mixes = readJSON('../db/emoji_mixes.json')

export class EmojiMixReader {

  static getRandomMix () {
    const randomIndex = Math.floor(Math.random() * supportedEmojis.length)
    const randomEmoji = supportedEmojis[randomIndex].unicode
    const emojiMixes = mixes[0][randomEmoji]

    return emojiMixes[Math.floor(Math.random() * emojiMixes.length)]
  }

}
