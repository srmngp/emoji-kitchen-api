import { expect } from 'chai'
import { readJson } from '../../src/utils/utils.js'
import { describe, it } from 'mocha'

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

})
