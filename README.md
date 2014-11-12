browserify-kraken-spudbundle
============================

i18n transport for browserify-based apps served by Kraken.js

Use
---

`var bksb = require('browserify-kraken-spudbundle');`

`bksb.build(projectRoot, cb)`: Builds browserify requireable bundles exposing `_languagepack` for each locale in `projectRoot/locales`

`bksb.localesPath()`: returns the path relative to the `projectRoot/.build/` of the compiled assets, suitable for tacking onto the end of a CDN root or static server root for use in applications.
