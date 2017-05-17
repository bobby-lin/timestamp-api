var express = require('express');
var timestamp = require('./tools/getTimeStamp');
var hbs = require('hbs');

var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials("./views/partials/");
hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear();
});

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'TIMESTAMP API',
    intro: 'Paste on address bar:',
    path_date: "{url}/December 15 2015",
    path_unix: "{url}/1450137600",
    output_text: "Example output:",
    output: "{\"unix\": 1450137600, \"natural\": \"December 15, 2015\"}"
  });
});

app.get('/:timeInput', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(timestamp.getTimestamp(req.params.timeInput)); // Send JSON object
});

app.listen(port, ()=> {
  console.log(`Starting up app at port ${port}`);
});
