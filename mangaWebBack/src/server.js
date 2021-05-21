import express from 'express';

import path from 'path';
const axios = require('axios');
const app = express();


app.use(express.static(path.join(__dirname, '/build')))

//Get requests
  /*app.get('/api/title/:id', function (req, res) {
    var url = `https://api.jikan.moe/v3/manga/${req.params.id}/`;
   axios.get(url).then(function(response){
     console.log(response); // This is how i select data
     console.log(req.params.id);
     res.json(response)
     }
)});*/

app.get('/api/title/:id', function (req, res) {
  var url = `https://api.jikan.moe/v3/manga/${req.params.id}`;
 axios.get(url).then(function(response){
  
   res.json(response.data)
   }
)});

app.get('/api/search/:id', function (req, res) {
  var url = `https://api.jikan.moe/v3/search/manga?q=${req.params.id}`;
 axios.get(url).then(function(response){
   
   res.json(response.data)
   }
)});
//Gets the top rated and viewd
app.get('/api/homepage/top', function (req, res) {
  var url = `https://api.jikan.moe/v3/top/manga/1/manga`;
 axios.get(url).then(function(response){
  
   res.json(response.data)
   }
)});
//Popular, should work as most views over a shorter amount of time
app.get('/api/homepage/MostPopular', function (req, res) {
  var url = `https://api.jikan.moe/v3/top/manga/1/bypopularity`;
 axios.get(url).then(function(response){
   
   res.json(response.data)
   }
)});
// Favorite / top rated
app.get('/api/homepage/Favorite', function (req, res) {
  var url = `https://api.jikan.moe/v3/top/manga/1/manga`;
 axios.get(url).then(function(response){
   
   res.json(response.data)
   }
)});
//Gets a random genre
app.get('/api/genre/random', function (req, res) {
  var genreID = Math.floor(Math.random() * 45);
  console.log(genreID)
  var url = `https://api.jikan.moe/v3/genre/manga/${genreID}/`;
 axios.get(url).then(function(response){
   
   res.json(response.data)
   }
)});

//Post requests
app.post('/api/homepage/:id/:pass', function (req, res) {
  var url = `https://ov25.brighton.domains/FinalYear/Api/api.php?oid=${req.params.id}&pw=${req.params.pass}`;
 axios.post(url).then(function(response){
   
   res.json(response.data)
   }
)});


app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(8000, () => console.log('Listening on port 8000'));