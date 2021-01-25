# Bunyan Adaptor

Maps the major [Pino](https://github.com/pinojs/pino) / [Bunyan](https://github.com/trentm/node-bunyan) logging methods to custom methods.

Enables you to make use of detailed logging within your modules while still falling back to `console.log()` if no Pino / Bunyan compatible logger has been provided.

Also enables you to map any logging system that's not compatible with Pino / Bunyan to be compatible with them.

## Reusable generic types

Apart from the actual adapter, this module also ships with some useful generic TypeScript types, where `BunyanLite` is the most usable of them.

The `BunyanLite` type can be used wherever one wants to reference a basic [Pino](https://github.com/pinojs/pino) / [Bunyan](https://github.com/trentm/node-bunyan) subset. That type can then be fulfilled by Pino, Bunyan, a logger created by this module or by another module implementing the same subset.

### All reusable generic types

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

## Usage

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
