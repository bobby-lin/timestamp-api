var express = require('express');
var validator = require('./tools/ts-validator');

var app = express();

const port = process.env.PORT || 3000;

app.get('/:timeInput', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(getTimestamp(req.params.timeInput)); // Send JSON object
});

app.listen(port, ()=> {
  console.log(`Starting up app at port ${port}`);
});
