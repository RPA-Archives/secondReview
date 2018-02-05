const models = require('../models');
const request = require('request-promise');
const https = require('https');

module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: (req, response) => {
      const promise = new Promise((rep,res)=>{
        request('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks')
        .then((booksData) => {
          return JSON.parse(booksData).books;
        })
        .then((booksArray)=>{
        // console.log(booksArray);
          booksArray.every((eachBook)=>{
          // console.log(eachBook);
            request(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${eachBook.id}`)
            .then((bookRating) => {
              eachBook.rating = JSON.parse(bookRating).rating;
            })
          })
        });
      })
      Promise.all(promise)
      .then((finalResponse)=>{
        console.log(finalResponse)
        response({
          statusCode: 200,
          body: finalResponse,
        });
      });
    },
  },
]