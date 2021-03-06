var day = require('./day');
var diff = require('./diff');


/**
 * Module exports
 */

exports.ceil = ceil;
exports.diff = diff(shift);
exports.floor = floor;
exports.shift = shift;


/**
 * Floors the week to the last _Monday_
 */

function floor (date) {
  date = day.floor(date);
  date.setUTCDate(date.getUTCDate() - date.getUTCDay());
  return date;
}


/**
 * Ceils the week to the next _Monday_
 */

function ceil (date) {
  var floored = floor(date);
  var roundUp = floored.getTime() !== date.getTime();
  if (roundUp) floored.setUTCDate(floored.getUTCDate() + 7);
  return floored;
}


/**
 * Shifts the `date` by `amount` weeks.
 */

function shift (date, amount) {
  date = new Date(date);
  date.setUTCDate(date.getUTCDate() + (7 * amount));
  return date;
}
