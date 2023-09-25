import { getHexValue } from '../utils/utils.js'
import { EmojiReader } from './EmojiReader.js'

export class EmojiController {

  static getEmojis (req, res) {
    try {
      const emojis = EmojiReader.getEmojis()
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(emojis))

    } catch (error) {
      res.status(500).send('Error obtaining emoji list')
      console.error(error)
    }
  }

  static getEmojiCombinations (req, res) {
    try {
      const emojiHexValue = getHexValue(req.params.emoji)
      const emojiCombinations = EmojiReader.getEmojiCombinations(emojiHexValue)
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(emojiCombinations))

    } catch (error) {
      console.error(error)
      res.status(500).send('Error obtaining emoji combinations')
    }
  }

}
