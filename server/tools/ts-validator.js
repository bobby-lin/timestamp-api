var moment = require('moment');

const df = "MMMM D, YYYY";
const unixToken = "X";
const valid_df = [
  "MM-DD-YYYY", "YYYY-MM-DD",
  "MMM D YYYY", "MMM DD YYYY", "MMM Do YYYY",
  "MMM D, YYYY", "MMM DD, YYYY", "MMM Do, YYYY",
  "MMMM D YYYY", "MMMM DD YYYY", "MMMM Do YYYY",
  "MMMM D, YYYY", "MMMM DD, YYYY", "MMMM Do, YYYY",
];

var checkUnixTS = (timeInput) => moment.unix(timeInput).isValid();
var convertUnixToDate = (unixTS) => moment.utc(moment.unix(unixTS)).format(df);

var checkDateTS = (timeInput) => moment(timeInput, valid_df, true).isValid();
var getStandardDate = (dateTS) => moment(dateTS, valid_df, true).format(df);
var convertDateToUnix = ((dateTS) => {
  var offset = moment(dateTS, valid_df, true).utcOffset();
  var adjustedTime =  moment(dateTS, valid_df, true).add(offset,'minutes');
  return Number(moment.utc(adjustedTime).format(unixToken));
});

module.exports = {
  checkUnixTS,
  checkDateTS,
  convertUnixToDate,
  convertDateToUnix,
  getStandardDate
}
