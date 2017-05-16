var express = require('express');
var validator = require('./tools/ts-validator');

var app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Timestamp API");
});

app.post('/:timeInput', (req, res)=> {
  var timeInput = req.params.timeInput;
  var timestamp = {
    unix: null,
    natural: null
  }

  console.log(timeInput);

  if (validator.checkUnixTS(timeInput)) {
    timestamp.unix = timeInput;
    timestamp.natural = validator.convertUnixToDate(timeInput);
  }
  else if (validator.checkDateTS(timeInput)) {
    timestamp.unix = validator.convertDateToUnix(timeInput);
    timestamp.natural = validator.getStandardDate(timeInput);
  }

  res.send(timestamp);

});

app.listen(port, ()=> {
  console.log(`Starting up app at port ${port}`);
});
