import chai, { expect } from 'chai'
import { describe, it } from 'mocha'
import sinon from 'sinon'
import axios from 'axios'
import { EmojiFetcher } from '../../src/controllers/EmojiFetcher.js'
import chaiAsPromised from 'chai-as-promised'

const emojiUrl = 'https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f4ab/u1f4ab_u1f431.png'
const emojiData = 'EMOJI_DATA'

chai.use(chaiAsPromised)

describe('EmojiFetcher', () => {

  describe('getRandomEmoji', () => {

    it('should return emoji data', async () => {
      sinon.stub(axios, 'get').resolves({ data: emojiData })

      const result = await EmojiFetcher.getEmojiData(emojiUrl)

      sinon.assert.calledOnceWithExactly(axios.get, emojiUrl, { responseType: 'arraybuffer' })
      expect(result).to.equal(emojiData)

      sinon.restore()
    })

    it('should throw errors', async () => {
      const emojiUrl = 'THIS_IS_A_INVALID_URL'

      expect(EmojiFetcher.getEmojiData(emojiUrl)).to.be.rejectedWith(Error)
    })

  })

})
