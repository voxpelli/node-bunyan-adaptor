# Pino / Bunyan Adaptor

[![npm version](https://img.shields.io/npm/v/bunyan-adaptor.svg?style=flat)](https://www.npmjs.com/package/bunyan-adaptor)
[![npm downloads](https://img.shields.io/npm/dm/bunyan-adaptor.svg?style=flat)](https://www.npmjs.com/package/bunyan-adaptor)
[![Module type: CJS+ESM](https://img.shields.io/badge/module%20type-cjs%2Besm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/voxpelli/eslint-config)
[![Follow @voxpelli@mastodon.social](https://img.shields.io/mastodon/follow/109247025527949675?domain=https%3A%2F%2Fmastodon.social&style=social)](https://mastodon.social/@voxpelli)

Types and mapper for [Pino](https://github.com/pinojs/pino) / [Bunyan](https://github.com/trentm/node-bunyan) logging methods.

Support Pino / Bunyan compatible loggers with fallback `console.log()`.

## `BunyanLite` – simplified Pino / Bunyan type subsets

Apart from the actual adapter, this module also ships with some useful generic TypeScript types, where `BunyanLite` is the most usable of them.

The `BunyanLite` type can be used wherever one wants to reference a basic [Pino](https://github.com/pinojs/pino) / [Bunyan](https://github.com/trentm/node-bunyan) subset. That type can then be fulfilled by Pino, Bunyan, a logger created by this module or by another module implementing the same subset.

### All Pino / Bunyan type subsets

* `BunyanLite` – specifies the lite subset of the Bunyan interface that this module supports
* `BunyanLogMethod` – specifies the very simple syntax for the individual log methods
* `BunyanChildMethod` – specified the syntax of the `child()` method

### Pino / Bunyan subset that's part of `BunyanLite`

* `.fatal()`
* `.error()`
* `.warn()`
* `.info()`
* `.debug()`
* `.trace()`
* `.child(data)`

## `createLogger()` – map any logger to `BunyanLite` subset

Simple CommonJS example:

```javascript
const logger = require('bunyan-adaptor')({
  log: console.log.bind(console),
  error: console.error.bind(console),
});

logger.error('Warning');      // Uses console.error()
logger.info('Informational'); // Uses console.log()
```

Simple ESM example:

```javascript
import createLogger from 'bunyan-adaptor';

const logger = createLogger({
  log: console.log.bind(console),
  error: console.error.bind(console),
});

logger.error('Warning');      // Uses console.error()
logger.info('Informational'); // Uses console.log()
```

Also available as a non-default export:

```javascript
const { createLogger } = require('bunyan-adaptor');
import { createLogger } from 'bunyan-adaptor';
```

## createLogger(options)

Maps `options` methods to all seven [Bunyan log levels](https://github.com/trentm/node-bunyan#levels).

* `.fatal()` – maps to `options.fatal` and fallbacks to `options.error` and `options.log` in that order
* `.error()` – maps to `options.error` and fallbacks to `options.log` in that order
* `.warn()` – maps to `options.warn` and fallbacks to `options.log`
* `.info()` – maps to `options.info` and fallbacks to `options.log`
* `.debug()` – maps to `options.debug` and fallbacks to `options.verbose` and `options.log` in that order
* `.trace()` – maps to `options.trace` and fallbacks to `options.verbose` and `options.log` in that order

`options.log` itself fallbacks to `console.log()`

In addition to the above there's also support for:

* `.child(data)` – used to create a child logger. Defaults to built in method, can be overriden using `options.child`

## See also

* [`abstract-logging`](https://www.npmjs.com/package/abstract-logging)
* 
