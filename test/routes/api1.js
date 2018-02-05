const server = require('../../server');
const models = require('../../models');


describe('test for api 1', () => {
  test('should give valid status code', (done) => {
    const options = {
      method: 'GET',
      url: '/books',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
});
