const utils = require('./utils');
const assert = require('assert');

//TEST SUITE
describe('utils.js 모듈의 capitalize 함수는 ', () => {
    //TEST CASE
    it('문자열의 첫 번째 문자를 대문자로 변환한다.', () => {
        const result = utils.capitalize('hello');
        assert.equal(result, 'Hello');
    })
})