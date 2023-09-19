import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it } from 'mocha'
import { app } from '../../app.js'

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
