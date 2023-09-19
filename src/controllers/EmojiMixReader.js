export class EmojiMixReader {

  static getRandomMix () {
    const randomIndex = Math.floor(Math.random() * supportedEmojis.length)
    const randomEmoji = supportedEmojis[randomIndex].unicode
    const emojiMixes = supportedMixes[0][randomEmoji]

    return emojiMixes[Math.floor(Math.random() * emojiMixes.length)]
  }

}

const supportedMixes = [
  {
    "1f600": [
      { "leftEmoji": "1fa84", "rightEmoji": "1f600", "date": "20210521" },
      { "leftEmoji": "1f600", "rightEmoji": "1f600", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f603", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f604", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f601", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f606", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f605", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f602", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f923", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f62d", "date": "20201001" },
      { "leftEmoji": "1f600", "rightEmoji": "1f609", "date": "20201001" }
    ]
  }
] 

export const supportedEmojis = [
  { unicode: '1f600', emoji: '😀' }
]
