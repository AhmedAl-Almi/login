const express = require('express');
var bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');
const app = express();


app.disable('x-powered-by');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello Ahmed',
    js: ['signup']
  })
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.listen(3000, () => {
  console.log('the server running on port 3000...');
})