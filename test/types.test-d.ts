// This file will never run, only just be type validated and serve as a test suite for types

import 'node';

import { BunyanLite } from '..';

// Will cause errors if used with something that's not a strict superset of BunyanLite
type ExpectBunyanLite<T extends BunyanLite> = T;

// Passes
import { Logger as PinoLogger } from 'pino';
export type PinoTest = ExpectBunyanLite<PinoLogger>;

import bunyan from '@scoop/bunyan';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bunyanLogger = bunyan.createLogger();
export type BunyanTest = ExpectBunyanLite<typeof bunyanLogger>;
