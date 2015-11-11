/* jshint node: true */

"use strict";

module.exports = function (options) {
  var logger = {};

  options = options || {};
  options.log = options.log || console.log.bind(console);

  ['trace', 'debug'].forEach(function (value) {
    logger[value] = options[value] || options.verbose || options.log;
  });

  ['info', 'warn'].forEach(function (value) {
    logger[value] = options[value] || options.log;
  });

  ['error', 'fatal'].forEach(function (value) {
    logger[value] = options[value] || options.error || options.log;
  });

  Object.freeze(logger);

  return logger;
};
