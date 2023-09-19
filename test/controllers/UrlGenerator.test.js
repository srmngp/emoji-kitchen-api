import { describe, it } from 'mocha'
import { expect } from 'chai'
import { UrlGenerator } from '../../src/controllers/UrlGenerator.js'

const mix = { leftEmoji: '1fa84', rightEmoji: '2615', date: '20210521' }

describe('UrlGenerator', () => {

  describe('getUrlFromMix', () => {

    it('should generate a url', () => {
      const url = UrlGenerator.getUrlFromMix(mix)

      expect(url).to.be.equal('https://www.gstatic.com/android/keyboard/emojikitchen/20210521/u1fa84/u1fa84_u2615.png')
    })

  })

})
