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

})
