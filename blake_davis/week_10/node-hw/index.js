// redo the stock price lookup project with express (this should be pretty quick now)

// create a second express project that communicates with an API of your choice

const express = require('express');
const stockFinder = require('stockfinder');
const axios = require('axios');
const ejs = require('ejs');
const apiKey = 'pk_16a849fd637243a79fff90fa4d42bc5d';

const server = express();
server.use(express.static("public"))
server.set('view-engine', ejs)
const PORT = 1337;

server.get('/', (req, res) => {
  res.render('homepage.ejs')
})

server.get('/output', (req, res) => {
  const sf = new stockFinder('stable', req.query.stonks , apiKey, false);
  sf.getStock().then(response => {
    res.render('output.ejs', {price: response[0].lastSalePrice})
  });

})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
