
'use strict';

/** @typedef {(data: Object<string, any>)=>BunyanLite} BunyanChildMethod */

/** @typedef {(...any)=>void} BunyanLogMethod */

/**
 * @typedef {object} BunyanLite
 * @property {BunyanChildMethod} child
 * @property {BunyanLogMethod} fatal
 * @property {BunyanLogMethod} error
 * @property {BunyanLogMethod} warn
 * @property {BunyanLogMethod} info
 * @property {BunyanLogMethod} debug
 * @property {BunyanLogMethod} trace
 */

const internalCreateLogger = function (options, data) {
  /**
   * @type {BunyanLite}
   */
  var logger = {};

  ['trace', 'debug'].forEach(function (value) {
    logger[value] = options[value] || options.verbose || options.log;
  });

  ['info', 'warn'].forEach(function (value) {
    logger[value] = options[value] || options.log;
  });

  ['error', 'fatal'].forEach(function (value) {
    logger[value] = options[value] || options.error || options.log;
  });

  if (data) {
    ['trace', 'debug', 'info', 'warn', 'error', 'fatal'].forEach(function (value) {
      logger[value] = logger[value].bind(undefined, data);
    });
  }

  logger.child = options.child || function (extraData) {
    return internalCreateLogger(options, Object.assign({}, data || {}, extraData));
  };

  Object.freeze(logger);

  return logger;
};

/**
 * Create a new Bunyan adaptor
 *
 * @param {object} [options]
 * @param {(data: Object<string, any>)=>BunyanLite} [options.child]
 * @param {BunyanLogMethod} [options.log] Defaults to `console.log()`
 * @param {BunyanLogMethod} [options.verbose] Defaults to `options.log`
 * @param {BunyanLogMethod} [options.trace] Defaults to `options.verbose`, fallbacks to `options.log`
 * @param {BunyanLogMethod} [options.debug] Defaults to `options.verbose`, fallbacks to `options.log`
 * @param {BunyanLogMethod} [options.info] Defaults to `options.log`
 * @param {BunyanLogMethod} [options.warn] Defaults to `options.log`
 * @param {BunyanLogMethod} [options.error] Defaults to `options.log`
 * @param {BunyanLogMethod} [options.fatal] Defaults to `options.error`, fallbacks to `options.log`
 * @returns {BunyanLite}
 */
var createLogger = function (options) {
  options = Object.assign({}, options || {});

  options.log = options.log || console.log.bind(console);

  return internalCreateLogger(options);
};

module.exports = createLogger;
