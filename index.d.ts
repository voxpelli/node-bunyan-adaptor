import type {
  BunyanAdaptorOptions,
  BunyanLite,
} from './reference-types.d.ts';

export type * from './reference-types.d.ts';

export function createLogger (options?: BunyanAdaptorOptions): BunyanLite;
export default createLogger;
// require() interop export, see https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require
export { createLogger as 'module.exports' };
