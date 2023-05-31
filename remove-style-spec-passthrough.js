var fs = require('fs');

/* eslint-disable no-undef */
const fileName = 'node_modules/maplibre-gl/src/index.ts';

fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(
        "export type * from '@maplibre/maplibre-gl-style-spec';",
        ''
    );

    fs.writeFile(fileName, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
