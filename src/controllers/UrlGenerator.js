const rootUrl = 'https://www.gstatic.com/android/keyboard/emojikitchen'

export class UrlGenerator {

  static getUrlFromMix (mix) {
    return `${rootUrl}/${mix.date}/${formatEmojiPart(mix.leftEmoji)}/${generateEmojiFilename(mix)}`
  }

}

function formatEmojiPart (emoji) {
  return emoji
    .split('-')
    .map((part) => `u${part.toLowerCase()}`)
    .join('-')
}

function generateEmojiFilename (mix) {
  return `${formatEmojiPart(mix.leftEmoji)}_${formatEmojiPart(mix.rightEmoji)}.png`
}
