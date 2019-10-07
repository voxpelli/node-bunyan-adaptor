// @ts-check

'use strict';

/** @typedef {(data: { [extraDataToLog:string]: any }) => BunyanLite} BunyanChildMethod */
/** @typedef {(...message: any) => void} BunyanLogMethod */

/**
 * @typedef BunyanLite
 * @property {BunyanLogMethod} fatal
 * @property {BunyanLogMethod} error
 * @property {BunyanLogMethod} warn
 * @property {BunyanLogMethod} info
 * @property {BunyanLogMethod} debug
 * @property {BunyanLogMethod} trace
 * @property {BunyanChildMethod} child
 */

/**
 * @typedef BunyanAdaptorOptions
 * @property {BunyanLogMethod} [options.log] Defaults to `console.log()`
 * @property {BunyanLogMethod} [options.verbose] Defaults to `options.log`
 * @property {BunyanLogMethod} [options.trace] Defaults to `options.verbose`, fallbacks to `options.log`
 * @property {BunyanLogMethod} [options.debug] Defaults to `options.verbose`, fallbacks to `options.log`
 * @property {BunyanLogMethod} [options.info] Defaults to `options.log`
 * @property {BunyanLogMethod} [options.warn] Defaults to `options.log`
 * @property {BunyanLogMethod} [options.error] Defaults to `options.log`
 * @property {BunyanLogMethod} [options.fatal] Defaults to `options.error`, fallbacks to `options.log`
 * @property {BunyanChildMethod} [options.child] Defaults to a standard simple child method
 */

/**
 * @template {function} T
 * @param {T} func
 * @param {Object<string,any>} [data]
 * @returns {T}
 */
const bindDataWhenExisting = function (func, data) {
  return data ? func.bind(undefined, data) : func;
};

/**
 * Internally used to enable creation of child loggers
 *
 * @param {BunyanAdaptorOptions} options
 * @param {Object<string,any>} [data]
 * @returns {BunyanLite}
 */
const internalCreateLogger = function (options, data) {
  return Object.freeze({
    fatal: bindDataWhenExisting(options.fatal || options.error || options.log, data),
    error: bindDataWhenExisting(options.error || options.error || options.log, data),

    warn: bindDataWhenExisting(options.warn || options.log, data),
    info: bindDataWhenExisting(options.info || options.log, data),

    debug: bindDataWhenExisting(options.debug || options.verbose || options.log, data),
    trace: bindDataWhenExisting(options.trace || options.verbose || options.log, data),

    child: options.child || function (extraData) {
      return internalCreateLogger(options, Object.assign({}, data || {}, extraData));
    }
  });
};

/**
 * Create a new Bunyan adaptor
 *
 * @param {BunyanAdaptorOptions} [options]
 * @returns {BunyanLite}
 */
const createLogger = function (options = {}) {
  options = Object.assign({}, options);

  options.log = options.log || console.log.bind(console);

  return internalCreateLogger(options);
};

module.exports = createLogger;
