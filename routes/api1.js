const models = require('../models');
const https = require('https');

module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: (request, response) => {
      https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', (reply) => {
        let data = '';
        reply.setEncoding('UTF8');
        reply.on('data', (chunk) => {
          data += chunk.toString();
        });

        reply.on('end', () => {
          // console.log(JSON.parse(data).books.length);
          const jsonData = JSON.parse(data).books;
          response({
            statusCode: reply.statusCode,
            body: jsonData,
          });
        });
      });
    },
  },
  {
    method: 'GET',
    path: '/ratings/{id*}',
    handler: (request, response) => {
      https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${request.params.id}`, (reply) => {
        let data = '';
        reply.setEncoding('UTF8');
        reply.on('data', (chunk) => {
          data += chunk.toString();
        });
        reply.on('end', () => {
          console.log(JSON.parse(data));
          const jsonData = JSON.parse(data);
          response({
            statusCode: reply.statusCode,
            body: [jsonData],
          });
        });
      });
    },
  },
];
