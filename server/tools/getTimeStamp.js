var validator = require('./tools/ts-validator');

var getTimestamp = ((timeInput) => {
  var timestamp = {
    unix: null,
    natural: null
  }
  if (validator.checkUnixTS(timeInput)) {
    timestamp.unix = Number(timeInput); // Unix stamp stored in integer
    timestamp.natural = validator.convertUnixToDate(timeInput);
  }
  else if (validator.checkDateTS(timeInput)) {
    timestamp.unix = validator.convertDateToUnix(timeInput);
    timestamp.natural = validator.getStandardDate(timeInput);
  }
  return timestamp;
});

module.exports.getTimestamp = getTimestamp;
