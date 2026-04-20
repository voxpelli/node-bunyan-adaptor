export type BunyanChildMethod = (data: {
  [extraDataToLog: string]: any;
}) => BunyanLite;

export type BunyanLogMethod = (...message: any) => void;

export type BunyanLite = {
  fatal: BunyanLogMethod;
  error: BunyanLogMethod;
  warn: BunyanLogMethod;
  info: BunyanLogMethod;
  debug: BunyanLogMethod;
  trace: BunyanLogMethod;
  child: BunyanChildMethod;
};

export type BunyanAdaptorOptions = {
  log?: BunyanLogMethod;
  verbose?: BunyanLogMethod;
  trace?: BunyanLogMethod;
  debug?: BunyanLogMethod;
  info?: BunyanLogMethod;
  warn?: BunyanLogMethod;
  error?: BunyanLogMethod;
  fatal?: BunyanLogMethod;
  child?: BunyanChildMethod;
};
