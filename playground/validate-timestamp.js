var moment = require('moment');

var validUnixTimestamp = "6572552";
var invalidUnixTimestamp = "-11111111111111";
var validDateTimestamp = "18 Mar 1970";
var invalidDateTimestamp = "Jan";
// const df = "Do MMMM YYYY";
const df = "MMMM D, YYYY h:mm:ss a";
const unixToken = "X";
const valid_df = [
  "Do MMMM YYYY", "MM-DD-YYYY", "YYYY-MM-DD",
  "MMM D YYYY", "MMMM D, YYYY", "D MMM YYYY"
];

var checkUnixTS = (timeInput) => moment.unix(timeInput).isValid();
var convertUnixToDate = (unixTS) => moment.utc(moment.unix(validUnixTimestamp)).format(df);
var checkDateTS = (timeInput) => moment(timeInput, valid_df, true).isValid();
var convertDateToUnix = (dateTS) => moment(dateTS, valid_df, true).format(unixToken);
var getStandardDate = (dateTS) => moment(dateTS, valid_df, true).format(df);

// console.log(convertUnixToDate(validUnixTimestamp), "UTC");
// console.log(moment.unix(validUnixTimestamp).format(df), "LOCAL TIME");
// console.log("Timestamp (UTC):", validUnixTimestamp);

// Unix ts: 6566400 (Wed, 18 Mar 1970 00:00:00 UTC)
var offset = moment(validDateTimestamp, valid_df, true).utcOffset();
console.log(moment(validDateTimestamp, valid_df, true).add(offset,'minutes').format(df), "LOCAL TIME");
var adjustedTime =  moment(validDateTimestamp, valid_df, true).add(offset,'minutes');
console.log(moment.utc(adjustedTime).format(df), "UTC");
console.log(moment.utc(adjustedTime).format(unixToken));

// console.log(getStandardDate(validDateTimestamp));
// console.log('Unix:', convertDateToUnix(validDateTimestamp));
// console.log(getStandardDate(invalidDateTimestamp));
// console.log('Unix:', convertDateToUnix(invalidDateTimestamp));
