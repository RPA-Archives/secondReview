const models = require('../models');
const https = require('https');

module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: (request, response) => {
      https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', (reply) => {
        // console.log(reply.statusCode);
        response({
          statusCode: reply.statusCode,
        });
      });
    },
  },
];
