import { supportedEmojis } from '../db/SupportedEmojis.js'
import { supportedEmojiMixes } from '../db/SupportedEmojiMixes.js'

export class EmojiMixReader {

  static getRandomMix () {
    const randomIndex = Math.floor(Math.random() * supportedEmojis.length)
    const randomEmoji = supportedEmojis[randomIndex].unicode

    const emojiMixes = supportedEmojiMixes[0][randomEmoji]

    return emojiMixes[Math.floor(Math.random() * emojiMixes.length)]
  }

}
