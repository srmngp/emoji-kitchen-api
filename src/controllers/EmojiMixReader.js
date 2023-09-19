import { readJson } from '../utils/utils.js'

export class EmojiMixReader {

  static getRandomMix () {
    const supportedEmojis = readJson('src/db/supported_emojis.json')
    const randomIndex = Math.floor(Math.random() * supportedEmojis.length)
    const randomEmoji = supportedEmojis[randomIndex].unicode

    const supportedMixes = readJson('src/db/emoji_mixes.json')
    const emojiMixes = supportedMixes[0][randomEmoji]

    return emojiMixes[Math.floor(Math.random() * emojiMixes.length)]
  }

}
