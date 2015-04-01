"use strict";

var bcp47 = require('bcp47');

module.exports = {
    build: function (root, cb) {
        require('./build')(root, cb);
    },
    languagePackPath: function languagePackPath(locality) {
        // Handle PayPal-style input
        if (locality.language && locality.country) locality = locality.language + '-' + locality.country;

        // Handle strings
        if (typeof locality == 'string') locality = bcp47.parse(locality);

        if (!locality || !locality.langtag || !locality.langtag.language || !locality.langtag.language.language || !locality.langtag.region) throw new Error('Invalid locality');

        return locality.langtag.language.language + '-' + locality.langtag.region + '/_languagepack.js';
    }
};
