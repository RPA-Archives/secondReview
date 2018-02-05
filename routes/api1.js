const models = require('../models');
const request = require('request-promise');
const https = require('https');
const getRating = (booksArray, response)=>{
    let counter = 0;
    booksArray.every((eachBook)=>{
      request(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${eachBook.id}`)
      .then((bookRating) => {
        eachBook.rating = JSON.parse(bookRating).rating;
        counter += 1;
        if(counter === 12) response(booksArray)
      })
    })
}
module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: (req, response) => {
        request('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks')
        .then((booksData) => {
          return JSON.parse(booksData).books;
        })
        .then(getrating, response);
    },

  },
]