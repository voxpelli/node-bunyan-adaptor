export = createLogger;
/**
 * Create a new Bunyan adaptor
 *
 * @param {BunyanAdaptorOptions} [options]
 * @returns {BunyanLite}
 */
declare function createLogger(options?: BunyanAdaptorOptions | undefined): BunyanLite;
declare namespace createLogger {
    export { BunyanChildMethod, BunyanLogMethod, BunyanLite, BunyanAdaptorOptions };
}
type BunyanAdaptorOptions = {
    /**
     * Defaults to `console.log()`
     */
    log?: BunyanLogMethod;
    /**
     * Defaults to `options.log`
     */
    verbose?: BunyanLogMethod;
    /**
     * Defaults to `options.verbose`, fallbacks to `options.log`
     */
    trace?: BunyanLogMethod;
    /**
     * Defaults to `options.verbose`, fallbacks to `options.log`
     */
    debug?: BunyanLogMethod;
    /**
     * Defaults to `options.log`
     */
    info?: BunyanLogMethod;
    /**
     * Defaults to `options.log`
     */
    warn?: BunyanLogMethod;
    /**
     * Defaults to `options.log`
     */
    error?: BunyanLogMethod;
    /**
     * Defaults to `options.error`, fallbacks to `options.log`
     */
    fatal?: BunyanLogMethod;
    /**
     * Defaults to a standard simple child method
     */
    child?: BunyanChildMethod;
};
type BunyanLite = {
    fatal: BunyanLogMethod;
    error: BunyanLogMethod;
    warn: BunyanLogMethod;
    info: BunyanLogMethod;
    debug: BunyanLogMethod;
    trace: BunyanLogMethod;
    child: BunyanChildMethod;
};
type BunyanChildMethod = (data: {
    [extraDataToLog: string]: any;
}) => BunyanLite;
type BunyanLogMethod = (...message: any) => void;
