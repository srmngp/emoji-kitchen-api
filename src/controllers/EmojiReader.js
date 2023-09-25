import { emojiList } from '../db/SupportedEmojis.js'
import { allEmojiMixes } from '../db/SupportedEmojiMixes.js'

export class EmojiReader {

  static getRandomMix () {
    const randomIndex = Math.floor(Math.random() * emojiList.length)
    const randomEmoji = emojiList[randomIndex].unicode

    const emojiMixes = allEmojiMixes[0][randomEmoji]

    return emojiMixes[Math.floor(Math.random() * emojiMixes.length)]
  }

  static getEmojis () {
    return emojiList
  }

  static getEmojiCombinations (emojiUnicode) {
    const mixes = allEmojiMixes[0][emojiUnicode]

    if (!mixes) {
      return []
    }

    const emojiCombinations = mixes
      .map(mix => mix.leftEmoji !== emojiUnicode ? mix.leftEmoji : mix.rightEmoji)
      .filter((value, index, self) => self.indexOf(value) === index)

    return emojiList.filter(emoji => emojiCombinations.includes(emoji.unicode))
  }

}
