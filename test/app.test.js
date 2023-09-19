import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it } from 'mocha'
import { app } from '../index.js'

chai.should()
chai.use(chaiHttp)

describe('GET /nonexistent url', () => {

  it('should return error 404', (done) => {
    chai.request(app).get('/nonexistent')
      .end((err, res) => {
        if (err) done(err)

        res.should.have.status(404)

        done()
      })
  })

})

describe('GET /', () => {

  it('should not return x-powered-by header', (done) => {
    chai.request(app).get('/')
      .end((err, res) => {
        if (err) done(err)

        res.should.have.status(200)
        res.should.not.have.header('x-powered-by')

        done()
      })
  })

})
