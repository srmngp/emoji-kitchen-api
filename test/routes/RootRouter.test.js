import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it } from 'mocha'
import { app } from '../../app.js'

chai.should()
chai.use(chaiHttp)

describe('GET /', () => {

  it('should return a welcome message', (done) => {
    chai.request(app).get('/')
      .end((err, res) => {
        if (err) done(err)

        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.message.should.equal('Welcome to the Emoji Kitchen API!')
        done()
      })
  })

  it('should return info about the API routes', (done) => {
    chai.request(app).get('/')
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(200)
        res.body.routes.should.be.a('object')
        res.body.routes['/mix/random'].should.equal('Get a random emoji mix')
        done()
      })
  })

})
