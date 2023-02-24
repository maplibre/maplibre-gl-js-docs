var fs = require('fs');

/* eslint-disable no-undef */
fileName =
    'node_modules/@maplibre/maplibre-gl-style-spec/tsc/src/reference/latest.js';

fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/ assert { type: 'json' }/g, '');

    fs.writeFile(fileName, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
