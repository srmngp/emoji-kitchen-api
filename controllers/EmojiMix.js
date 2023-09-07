const randomUrl = 'https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f4ab/u1f4ab_u1f431.png'

export class EmojiMixController {

  static async getRandomMix (req, res) {
    res.json({ mixUrl: randomUrl })
  }

}
