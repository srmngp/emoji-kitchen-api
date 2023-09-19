import { EmojiFetcher } from './EmojiFetcher.js'
import { EmojiMixReader } from './EmojiMixReader.js'
import { UrlGenerator } from './UrlGenerator.js'

export class EmojiMixController {

  static async getRandomMix (req, res) {
    try {
      const mix = EmojiMixReader.getRandomMix()
      const emojiUrl = UrlGenerator.getUrlFromMix(mix)
      const emojiBuffer = await EmojiFetcher.getRandomEmoji(emojiUrl)

      res.setHeader('Content-Type', 'image/png')
      res.end(emojiBuffer)

    } catch (error) {
      res.status(500).send('Error obtaining emoji')
      console.error(error)
    }
  }

}
