## 6.0.0 (YYYY-MM-DD)

* **BREAKING:** Require at least Node 14.18
## 5.0.1 (2021-03-18)

* *Tweak*: Move to the more permissive [Zero-Clause BSD license](https://choosealicense.com/licenses/0bsd/) to get rid of requirement to [include copyright statement](https://twitter.com/felixge/status/1372207750516723715). This is a fully backwards compatible change as it only allows _more_ and is a license recognized as usable by [eg. Google](https://opensource.google/docs/thirdparty/licenses/#unencumbered)

## 5.0.0 (2021-01-24)

* **BREAKING:** Require at least Node 12
* *Improvement:* Generates source maps for types
* *Improvement:* Ships with an ESM module besides the CommonJS one, thanks to [linemod](https://github.com/voxpelli/linemod/)

## 4.0.1 (2020-01-27)

* *Fix*: Properly pointed out the [types in the package.json](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#including-declarations-in-your-npm-package) file
* *Fix*: Corrected the JSDoc declaration of the main options

## 4.0.0 (2019-11-18)

* *Feature*: Restore included types that required [TypeScript 3.7.0](https://github.com/microsoft/TypeScript/pull/32372)

## 3.0.2 (2019-11-18)

* *Revert*: TypeScript definition not compatible with any release before [TypeScript 3.7.0](https://github.com/microsoft/TypeScript/pull/32372), which made it a breaking change

## 3.0.1 (2019-11-12)

* *Feature*: TypeScript definition generated from JSDoc comments (thanks to [TypeScript 3.7.0](https://github.com/microsoft/TypeScript/pull/32372))
* *Tweak*: Enforced stricter TypeScript tests
* *Tweak*: Added a very restrictive `.npmignore`, to avoid publishing any unneeded files
* *Chore*: Updated dev dependencies
* *Chore*: Added [Renovate](https://renovatebot.com/), to get pinged about outdated dependencies

## 3.0.0 (2019-01-11)

* *Breaking*: Require at least Node 8

## 2.0.0 (2019-01-11)

* *Breaking*: Require at least Node 4
* *Feature*: Added support for `.child()`
* *Stability*: Added tests and linting
* *Stability*: Added JSDoc comments and TypeScript linting using those comments

## 1.1.0 (2015-11-11)

* add console.log() fallback ([59cddb63](http://github.com/voxpelli/node-bunyan-adaptor/commit/59cddb63a4a6c6ef885e523e9fa4e62eb58a2905))
* add new "verbose" option ([6f92a1bf](http://github.com/voxpelli/node-bunyan-adaptor/commit/6f92a1bf6984b2376bca0b810f6a98616b55b560))
* initial bunyan-adaptor ([ba1d339d](http://github.com/voxpelli/node-bunyan-adaptor/commit/ba1d339d4bb54b19671072d0bd5165000b087e43))

