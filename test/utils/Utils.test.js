/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import { getHexValue, isSupportedEmoji, readJson } from '../../src/utils/utils.js'
import { describe, it } from 'mocha'
import { emojiList } from '../../src/db/SupportedEmojis.js'

describe('Utils', () => {

  describe('readJson', () => {

    it('should read a json file', () => {
      const jsonPath = '/test/db/emoji_mixes_test.json'

      const jsonData = readJson(jsonPath)

      expect(jsonData[0]).to.have.property('2615')
    })

    it('should throw error if doest work', () => {
      const jsonPath = './ruta-inexistente/archivo_que_no_existe.json'

      const readJSONWrapper = () => readJson(jsonPath)

      expect(readJSONWrapper).to.throw('ENOENT: no such file or directory')
    })

  })

  describe('isEmoji', () => {

    it('should return true if string is emoji', () => {
      emojiList.forEach(emoji => {
        expect(isSupportedEmoji(emoji.emoji)).to.be.true
      })
    })

    it('should return false if string is not emoji', () => {
      const emoji = '2648'

      expect(isSupportedEmoji(emoji)).to.be.false
    })

  })

  describe('getHexValue', () => {

    it('should return hex value if param is an emoji', () => {
      const emoji = '🎷'

      expect(getHexValue(emoji)).to.be.equal('1f3b7')
    })

    it('should return hex value if param is an emoji with variation selectors', () => {
      const emoji = '🕷️'

      expect(getHexValue(emoji)).to.be.equal('1f577-fe0f')
    })

    it('should return param value if it is the hexadecimal value', () => {
      const emoji = '2648'

      expect(getHexValue(emoji)).to.be.equal('2648')
    })

    it('should return param value if it is the hexadecimal value with U+', () => {
      const emoji = 'U+1F577'

      expect(getHexValue(emoji)).to.be.equal('1f577')
    })

    it('should return param value to lower case', () => {
      const emoji = 'U+1F577'

      expect(getHexValue(emoji)).to.be.equal('1f577')
    })

  })

})
