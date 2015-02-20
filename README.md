makara-browserify
=================

i18n transport for browserify-based apps served by Kraken.js

Use
---

`var mb = require('makara-browserify');`

`mb.build(projectRoot, cb)`: Builds browserify requireable bundles exposing `_languagepack` for each locale in `projectRoot/locales`

`mb.localesPath()`: returns the path relative to the `projectRoot/.build/` of the compiled assets, suitable for tacking onto the end of a CDN root or static server root for use in applications.
