import chai from 'chai'
import chaiHttp from 'chai-http'
import { afterEach, describe, it } from 'mocha'
import { app } from '../../index.js'
import sinon from 'sinon'
import { EmojiReader } from '../../src/controllers/EmojiReader.js'

chai.should()
chai.use(chaiHttp)

describe('GET /mix/random', () => {

  it('should return a emoji .png', (done) => {
    chai.request(app).get('/mix/random')
      .end((err, res) => {
        if (err) done(err)

        res.should.have.status(200)
        res.should.have.header('content-type', 'image/png')
        res.body.should.be.an.instanceOf(Buffer)
        done()
      })
  })

})

describe('GET /mix/:emoji1/:emoji2', () => {

  afterEach(() => {
    sinon.restore()
  })

  it('should return a emoji .png', (done) => {
    sinon.stub(EmojiReader, 'findMix').returns({ leftEmoji: '2763-fe0f', rightEmoji: '2649', date: '20220203' })

    chai.request(app).get('/mix/2763-fe0f/2649')
      .end((err, res) => {
        if (err) done(err)

        res.should.have.status(200)
        res.should.have.header('content-type', 'image/png')
        res.body.should.be.an.instanceOf(Buffer)
        done()
      })
  })

})

describe('GET /mix/random-url', () => {

  afterEach(() => {
    sinon.restore()
  })

  it('should return a url', (done) => {
    sinon.stub(EmojiReader, 'getRandomMix').returns({ leftEmoji: '2763-fe0f', rightEmoji: '2649', date: '20220203' })

    chai.request(app).get('/mix/random-url')
      .end((err, res) => {
        if (err) done(err)

        res.should.have.status(200)
        res.body.should.have.property('url')
        res.body.url.should.be.a('string')
        done()
      })
  })

})
