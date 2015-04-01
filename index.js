/* jshint node: true */

"use strict";

var logger = {};

['trace', 'debug', 'info', 'warn'].forEach(function (value) {
  logger[value] = console.log.bind(console);
});

['error', 'fatal'].forEach(function (value) {
  logger[value] = console.error.bind(console);
});

Object.freeze(logger);

module.exports = logger;
