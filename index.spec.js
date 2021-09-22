const request = require('supertest');
const should = require('should');
const app = require('./index');

//API 테스트의 경우 테스트 수트에 API 이름을 적는다.
describe('GET /users는', () => {
    describe('성공 시', () => {
        it('유저 객체를 담은 배열로 응답한다', (done) => {
            request(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array);
                    done();
                });
        });
    });

});