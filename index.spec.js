const app = require('./index');
const request = require('supertest');

//API 테스트의 경우 테스트 수트에 API 이름을 적는다.
describe('GET /users는', () => {
    it('should ', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                console.log(res.body);
                done();
            });
    });
});