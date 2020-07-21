const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const _ = require('underscore');

const server = express()
server.use(express.static('public'));
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req,res) => {
  res.render('home.ejs')
})

server.get('/results', (req,res) => {
  const title = req.query.book
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`).then((response) => {
    res.render('results.ejs', {title: response.data.items[0].volumeInfo.title, author: response.data.items[0].volumeInfo.authors, image: response.data.items[0].volumeInfo.imageLinks.smallThumbnail})
  })
})

server.listen(PORT, () => console.log(`Now we are learning finally through http://localhost:${PORT}/`));
