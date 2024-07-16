const express = require('express')
const app = express()
const port = 3001

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home', (req, res) => {
  res.sendFile(__dirname + '/views/Home.html');
})

app.get('/About', (req, res) => {
  res.sendFile(__dirname + '/views/About.html');
})

app.get('/Contact', (req, res) => {
  res.sendFile(__dirname + '/views/Contact.html');
})

app.get('/cake', (req, res) => {
  res.send('Hello Cake!');
})

app.get('/cake/ahmedabad', (req, res) => {
  res.send('Hello Cake ahmedabad!');
})

app.get('/cake/morbi', (req, res) => {
  res.send('Hello Cake morbi!');
})

app.get('*', (req, res) => {
  res.send('404 File Not Found');
})

app.get('/img', (req, res) => {
  res.sendFile(__dirname + '/free-nature-images.jpg');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})