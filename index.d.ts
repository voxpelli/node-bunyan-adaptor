export = createLogger;
declare function createLogger(options?: BunyanAdaptorOptions | undefined): BunyanLite;
declare namespace createLogger {
    export { createLogger, BunyanChildMethod, BunyanLogMethod, BunyanLite, BunyanAdaptorOptions };
}
type BunyanAdaptorOptions = {
    log?: BunyanLogMethod | undefined;
    verbose?: BunyanLogMethod | undefined;
    trace?: BunyanLogMethod | undefined;
    debug?: BunyanLogMethod | undefined;
    info?: BunyanLogMethod | undefined;
    warn?: BunyanLogMethod | undefined;
    error?: BunyanLogMethod | undefined;
    fatal?: BunyanLogMethod | undefined;
    child?: BunyanChildMethod | undefined;
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
//# sourceMappingURL=index.d.ts.map