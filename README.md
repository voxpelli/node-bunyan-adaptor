# Bunyan Adaptor

Maps the major [Bunyan](https://github.com/trentm/node-bunyan) logging methods to custom methods. Useful for fitting your own logging system with a module expecting a Bunyan interface. For a simple `console.log()`/`.error()` mapping see [Bunyan Duckling]https://github.com/bloglovin/node-bunyan-duckling

## Installation

```bash
npm install bunyan-adaptor --save
```

## Syntax

`var logger = bunyanAdaptor(options);`

## Usage

Simple:

```javascript
var logger = require('bunyan-adaptor')({
  log: console.log.bind(console),
  error: console.error.bind(console),
});

logger.error('Warning');      // Uses console.error()
logger.info('Informational'); // Uses console.log()
```

## Options

Maps `options` methods to all seven [Bunyan log levels](https://github.com/trentm/node-bunyan#levels).

* `.fatal()` – maps to `options.fatal` and fallbacks to `options.error` and `options.log` in that order
* `.error()` – maps to `options.error` and fallbacks to `options.error` and `options.log` in that order
* `.warn()` – maps to `options.warn` and fallbacks to `options.log`
* `.info()` – maps to `options.info` and fallbacks to `options.log`
* `.debug()` – maps to `options.debug` and fallbacks to `options.log`
* `.trace()` – maps to `options.trace` and fallbacks to `options.log`
