import { describe, it } from 'mocha'
import { expect } from 'chai'
import { EmojiReader } from '../../src/controllers/EmojiReader.js'

describe('EmojiReader', () => {

  describe('getRandomMix', () => {

    it('should return a random mix', () => {
      const mix = EmojiReader.getRandomMix()

      expect(mix).to.be.an('object')
      expect(mix).to.have.property('leftEmoji')
      expect(mix).to.have.property('rightEmoji')
      expect(mix).to.have.property('date')
    })

  })

  describe('getEmojis', () => {

    it('should return a list of emojis', () => {
      const emojis = EmojiReader.getEmojis()

      expect(emojis).to.be.an('array')
      expect(emojis[0]).to.be.an('object')
      expect(emojis[0]).to.have.property('unicode')
      expect(emojis[0]).to.have.property('emoji')
    })

  })

  describe('getEmojiCombinations', () => {

    it('should return a list of emoji combinations', () => {
      const combinations = EmojiReader.getEmojiCombinations('2648')

      console.log(combinations)
      expect(combinations)
        .to.be.an('array')
        .and.to.have.lengthOf(37)
      expect(combinations).to.include.deep(
        { unicode: '1fa84', emoji: '🪄' },
        { unicode: '1f602', emoji: '😂' },
        { unicode: '1f618', emoji: '😘' })
    })

    it('should return an empty list when the unicode is not found', () => {
      const combinations = EmojiReader.getEmojiCombinations('asdf')

      expect(combinations)
        .to.be.an('array')
        .and.to.have.lengthOf(0)
    })

    it('should return a list of emoji combinations when the unicode is stored as rightEmoji', () => {
      const combinations = EmojiReader.getEmojiCombinations('2649')

      expect(combinations)
        .to.be.an('array')
        .and.to.have.lengthOf(37)
      expect(combinations).to.include.deep(
        { unicode: '1fa84', emoji: '🪄' },
        { unicode: '2665-fe0f', emoji: '♥️' },
        { unicode: '1f3b0', emoji: '🎰' })
    })

  })

})
