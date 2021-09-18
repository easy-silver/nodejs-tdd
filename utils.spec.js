const utils = require('./utils');
const should = require('should');

//TEST SUITE
describe('utils.js 모듈의 capitalize 함수는 ', () => {
    //TEST CASE
    it('문자열의 첫 번째 문자를 대문자로 변환한다.', () => {
        const result = utils.capitalize('hello');
        result.should.be.equal('Hello');
    })
})