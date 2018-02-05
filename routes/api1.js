const models = require('../models');
const request = require('request-promise');
const https = require('https');

module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: (req, response) => {
      request('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks')
      .then((booksData) => {
        // console.log(JSON.parse(data).books);
        return JSON.parse(booksData).books;
      })
      .then((booksArray)=>{
        // console.log(booksArray);
        booksArray.forEach((eachBook)=>{
          request(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${eachBook.id}`)
          .then((bookRating)=>{
            // console.log(JSON.parse(bookRating)
            booksArray.eachBook.rating = JSON.parse(bookRating).rating;
            // console.log(eachBook);
          })
        })
        // console.log(booksArray)
        return booksArray
      })
      .then((finalResponse)=>{
        // console.log(finalResponse)
        response({
          statusCode: 200,
          body: finalResponse,
        });
      });
    },
  },
]