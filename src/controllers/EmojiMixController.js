import { getHexValue } from '../utils/utils.js'
import { EmojiFetcher } from './EmojiFetcher.js'
import { EmojiReader } from './EmojiReader.js'
import { UrlGenerator } from './UrlGenerator.js'

export class EmojiMixController {

  static async getRandomMix (req, res) {
    try {
      const mix = EmojiReader.getRandomMix()
      const emojiUrl = UrlGenerator.getUrlFromMix(mix)
      const emojiBuffer = await EmojiFetcher.getEmojiData(emojiUrl)

      res.setHeader('Content-Type', 'image/png')
      res.end(emojiBuffer)

    } catch (error) {
      res.status(500).send('Error obtaining mix')
      console.error(error)
    }
  }

  static async getRandomMixUrl (req, res) {
    try {
      const mix = EmojiReader.getRandomMix()
      const emojiUrl = UrlGenerator.getUrlFromMix(mix)
      res.json({
        url: emojiUrl
      })
    } catch (error) {
      res.status(500).send('Error obtaining mix url')
      console.error(error)
    }
  }

  static async getMix (req, res) { // TODO refactor this
    console.log('getMix', req.params)
    try {

      const paramMix = {
        emoji1: getHexValue(req.params.emoji1),
        emoji2: getHexValue(req.params.emoji2)
      }
      const mix = EmojiReader.findMix(paramMix)
      if (mix === null) {
        res.status(404).send('Mix not found')
        return
      }

      const emojiUrl = UrlGenerator.getUrlFromMix(mix)
      const emojiBuffer = await EmojiFetcher.getEmojiData(emojiUrl)

      res.setHeader('Content-Type', 'image/png')
      res.end(emojiBuffer)

    } catch (error) {
      console.error(error)
      res.status(500).send('Error obtaining mix')
    }
  }

}
