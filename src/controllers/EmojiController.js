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
      const emojiUnicode = req.params.unicode
      const emojiCombinations = EmojiReader.getEmojiCombinations(emojiUnicode)
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(emojiCombinations))

    } catch (error) {
      res.status(500).send('Error obtaining emoji combinations')
      console.error(error)
    }
  }

}
