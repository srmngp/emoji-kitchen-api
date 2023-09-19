import { describe, it } from 'mocha'
import { expect } from 'chai'
import { EmojiMixReader } from '../../src/controllers/EmojiMixReader.js'

describe('EmojiMixReader', () => {

  describe('getRandomMix', () => {

    it('should return a random mix', () => {
      const mix = EmojiMixReader.getRandomMix()

      expect(mix).to.be.an('object')
      expect(mix).to.have.property('leftEmoji')
      expect(mix).to.have.property('rightEmoji')
      expect(mix).to.have.property('date')
    })

  })

})
