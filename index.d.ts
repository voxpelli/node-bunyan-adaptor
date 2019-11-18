export = createLogger;
declare function createLogger(options?: BunyanAdaptorOptions | undefined): BunyanLite;
declare namespace createLogger {
    export { BunyanChildMethod, BunyanLogMethod, BunyanLite, BunyanAdaptorOptions };
}
type BunyanAdaptorOptions = {
    /**
     * Defaults to `console.log()`
     */
    log?: (...message: any) => void;
    /**
     * Defaults to `options.log`
     */
    verbose?: (...message: any) => void;
    /**
     * Defaults to `options.verbose`, fallbacks to `options.log`
     */
    trace?: (...message: any) => void;
    /**
     * Defaults to `options.verbose`, fallbacks to `options.log`
     */
    debug?: (...message: any) => void;
    /**
     * Defaults to `options.log`
     */
    info?: (...message: any) => void;
    /**
     * Defaults to `options.log`
     */
    warn?: (...message: any) => void;
    /**
     * Defaults to `options.log`
     */
    error?: (...message: any) => void;
    /**
     * Defaults to `options.error`, fallbacks to `options.log`
     */
    fatal?: (...message: any) => void;
    /**
     * Defaults to a standard simple child method
     */
    child?: (data: {
        [extraDataToLog: string]: any;
    }) => BunyanLite;
};
type BunyanLite = {
    fatal: (...message: any) => void;
    error: (...message: any) => void;
    warn: (...message: any) => void;
    info: (...message: any) => void;
    debug: (...message: any) => void;
    trace: (...message: any) => void;
    child: (data: {
        [extraDataToLog: string]: any;
    }) => BunyanLite;
};
type BunyanChildMethod = (data: {
    [extraDataToLog: string]: any;
}) => BunyanLite;
type BunyanLogMethod = (...message: any) => void;
