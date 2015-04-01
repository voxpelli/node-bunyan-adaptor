# Bunyan Duckling

Maps the major [Bunyan](https://github.com/trentm/node-bunyan) logging methods to `console.log()`/`.error()`. Useful for modules that want to be compatible with, but not require, Bunyan logging.

## Installation

```bash
npm install bunyan-duckling --save
```

## Usage

Simple:

```javascript
var logger = require('bunyan-duckling');

logger.error('Warning');      // Uses console.error()
logger.info('Informational'); // Uses console.log()
```

## Supported methods

Has support for all seven [Bunyan log levels](https://github.com/trentm/node-bunyan#levels).

* `.fatal()` – maps to `console.error()`
* `.error()` – maps to `console.error()`
* `.warn()` – maps to `console.log()`
* `.info()` – maps to `console.log()`
* `.debug()` – maps to `console.log()`
* `.trace()` – maps to `console.log()`
