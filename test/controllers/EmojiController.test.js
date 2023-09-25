/* eslint-disable no-unused-expressions */
import { afterEach, describe, it } from 'mocha'
import sinon from 'sinon'
import { EmojiController } from '../../src/controllers/EmojiController.js'
import { expect } from 'chai'
import { EmojiReader } from '../../src/controllers/EmojiReader.js'

describe('EmojiController', () => {

  afterEach(() => {
    sinon.restore()
  })

  describe('getEmojis', () => {

    it('should fill http response with avaliable emojis', () => {
      const res = {
        setHeader: sinon.stub().returnsThis(),
        end: sinon.spy()
      }

      EmojiController.getEmojis({}, res)

      expect(res.setHeader.calledWith('Content-Type', 'application/json')).to.be.true
      expect(res.end.firstCall.args).to.be.a('array')
    })

    it('should fill http response with status code 500 when an error occurs', () => {
      sinon.stub(EmojiReader, 'getRandomMix').throws(new Error('test'))
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      }

      EmojiController.getEmojis({}, res)

      expect(res.status.calledWith(500)).to.be.true
    })

    it('should fill http response with text explaining when an error occurs', async () => {
      sinon.stub(EmojiReader, 'getRandomMix').throws(new Error('test'))
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      }

      EmojiController.getEmojis({}, res)

      expect(res.send.calledWith('Error obtaining emoji list')).to.be.true
    })

  })

  describe('getEmojiCombinations', () => {

    it('should fill http response with avaliable emoji combinations', () => {
      const res = {
        setHeader: sinon.stub().returnsThis(),
        end: sinon.spy()
      }

      EmojiController.getEmojiCombinations({ params: { emoji: '2648' } }, res)

      expect(res.setHeader.calledWith('Content-Type', 'application/json')).to.be.true
      const combinations = JSON.parse(res.end.firstCall.args[0])
      expect(combinations)
        .to.be.a('array')
        .and.to.have.lengthOf.at.least(1)
    })

    it('should fill http response with status code 500 when an error occurs', () => {
      sinon.stub(EmojiReader, 'getRandomMix').throws(new Error('test'))
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      }

      EmojiController.getEmojiCombinations({ params: { emoji: '2648' } }, res)

      expect(res.status.calledWith(500)).to.be.true
    })

    it('should fill http response with text explaining when an error occurs', async () => {
      sinon.stub(EmojiReader, 'getRandomMix').throws(new Error('test'))
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      }

      EmojiController.getEmojiCombinations({ params: { emoji: '2648' } }, res)

      expect(res.send.calledWith('Error obtaining emoji combinations')).to.be.true
    })

    it('should accept emojis as param', () => {
      const res = {
        setHeader: sinon.stub().returnsThis(),
        end: sinon.spy()
      }

      EmojiController.getEmojiCombinations({ params: { emoji: '🎷' } }, res)

      const combinations = JSON.parse(res.end.firstCall.args[0])
      expect(combinations)
        .to.be.a('array')
        .and.to.have.lengthOf.at.least(1)
    })

  })

})
