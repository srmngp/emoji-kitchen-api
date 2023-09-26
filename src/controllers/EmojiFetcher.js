import axios from 'axios'

export class EmojiFetcher {

  static async getEmojiData (emojiUrl) {
    const response = await axios
      .get(emojiUrl, { responseType: 'arraybuffer' })
      .catch(error => {
        console.error(error.message)
        throw error
      })

    return response.data
  }

}
