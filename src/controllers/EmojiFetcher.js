import axios from 'axios'

export class EmojiFetcher {

  static async getRandomEmoji (emojiUrl) {
    const response = await axios
      .get(emojiUrl, { responseType: 'arraybuffer' })
      .catch(error => {
        console.error(error.message)
        throw error
      })

    return response.data
  }

}
