/** @import { BunyanAdaptorOptions, BunyanLite, BunyanLogMethod } from './reference-types.d.ts' */

/**
 * @template {function} T
 * @param {T} func
 * @param {Object<string,any>} [data]
 * @returns {T}
 */
function bindDataWhenExisting (func, data) {
  return data ? func.bind(undefined, data) : func;
}

/**
 * Internally used to enable creation of child loggers
 *
 * @param {BunyanAdaptorOptions & { log: BunyanLogMethod }} options
 * @param {Object<string,any>} [data]
 * @returns {BunyanLite}
 */
function internalCreateLogger (options, data) {
  return Object.freeze({
    fatal: bindDataWhenExisting(options.fatal || options.error || options.log, data),
    error: bindDataWhenExisting(options.error || options.log, data),

    warn: bindDataWhenExisting(options.warn || options.log, data),
    info: bindDataWhenExisting(options.info || options.log, data),

    debug: bindDataWhenExisting(options.debug || options.verbose || options.log, data),
    trace: bindDataWhenExisting(options.trace || options.verbose || options.log, data),

    child: options.child || function (extraData) {
      return internalCreateLogger(options, { ...data, ...extraData });
    },
  });
}

/**
 * Create a new Bunyan adaptor
 *
 * @param {BunyanAdaptorOptions} [options]
 * @returns {BunyanLite}
 */
export function createLogger (options = {}) {
  return internalCreateLogger({
    ...options,
    // eslint-disable-next-line no-console
    log: options.log || console.log.bind(console),
  });
}

export default createLogger;
// require() interop export, see https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require
export { createLogger as 'module.exports' };
