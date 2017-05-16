var express = require('express');
var timestamp = require('./tools/getTimestamp');

var app = express();

const port = process.env.PORT || 3000;

app.get('/:timeInput', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(timestamp.getTimestamp(req.params.timeInput)); // Send JSON object
});

app.listen(port, ()=> {
  console.log(`Starting up app at port ${port}`);
});
