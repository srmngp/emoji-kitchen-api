/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import sinon from 'sinon'
import { afterEach, describe, it } from 'mocha'
import { EmojiReader } from '../../src/controllers/EmojiReader.js'
import { UrlGenerator } from '../../src/controllers/UrlGenerator.js'
import { EmojiFetcher } from '../../src/controllers/EmojiFetcher.js'
import { EmojiMixController } from '../../src/controllers/EmojiMixController.js'

describe('EmojiMixController', () => {

  describe('getRandomMix', () => {

    afterEach(() => {
      sinon.restore()
    })

    it('should fill http response with .png image', async () => {
      mockEmojiMixControllerDependencies()
      const res = {
        setHeader: sinon.stub().returnsThis(),
        end: sinon.spy()
      }

      await EmojiMixController.getRandomMix({}, res)

      expect(res.setHeader.calledWith('Content-Type', 'image/png')).to.be.true
      expect(res.end.calledWith(Buffer.from('test_data'))).to.be.true
    })

    it('should fill http response with status code 500 when an error occurs', async () => {
      mockEmojiMixControllerDependenciesThrowsError()
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      }

      await EmojiMixController.getRandomMix({}, res)

      expect(res.status.calledWith(500)).to.be.true
    })

    it('should fill http response with text explaining when an error occurs', async () => {
      mockEmojiMixControllerDependenciesThrowsError()
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      }

      await EmojiMixController.getRandomMix({}, res)

      expect(res.send.calledWith('Error obtaining mix')).to.be.true
    })

  })

})

function mockEmojiMixControllerDependencies () {
  sinon.stub(EmojiReader, 'getRandomMix').returns({ /* test data */ })
  sinon.stub(UrlGenerator, 'getUrlFromMix').returns('test_url')
  sinon.stub(EmojiFetcher, 'getRandomEmoji').resolves(Buffer.from('test_data'))
}

function mockEmojiMixControllerDependenciesThrowsError () {
  sinon.stub(EmojiReader, 'getRandomMix').returns({ /* test data */ })
  sinon.stub(UrlGenerator, 'getUrlFromMix').returns('test_data')
  sinon.stub(EmojiFetcher, 'getRandomEmoji').rejects(new Error('test_error'))
}
