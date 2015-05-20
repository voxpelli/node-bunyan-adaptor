/* jshint node: true */

"use strict";

module.exports = function (options) {
  var logger = {};

  ['trace', 'debug', 'info', 'warn'].forEach(function (value) {
    logger[value] = options[value] || options.log;
  });

  ['error', 'fatal'].forEach(function (value) {
    logger[value] = options[value] || options.error || options.log;
  });

  Object.freeze(logger);

  return logger;
};
