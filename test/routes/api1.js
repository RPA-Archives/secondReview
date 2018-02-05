const server = require('../../server');
const models = require('../../models');


describe('test for valid status code', () => {
  test('should give valid status code for get allbooks', (done) => {
    const options = {
      method: 'GET',
      url: '/books',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
  test('should give valid status code for get ratings', (done) => {
    const options = {
      method: 'GET',
      url: '/ratings/1',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
});
