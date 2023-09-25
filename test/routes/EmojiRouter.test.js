import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it } from 'mocha'
import { app } from '../../index.js'

chai.should()
chai.use(chaiHttp)

describe('GET /emoji', () => {

  it('should return a emoji list', (done) => {
    chai.request(app).get('/emoji')
      .end((err, res) => {
        if (err) done(err)

        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })

})

describe('GET /emoji/:combination/combinations', () => {

  it('should return a emoji list ', (done) => {
    chai.request(app).get('/emoji/2648/combinations')
      .end((err, res) => {
        if (err) done(err)

        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })

})
