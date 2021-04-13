const test = require('tape');
const redirect = require('../docs/util/style-spec-redirect.js');

test(`style-spec-redirect`, (t) => {
    t.equal(
        redirect({
            hash: '#light-anchor'
        }),
        '/maplibre-gl-js-docs/style-spec/light/#anchor'
    );

    t.equal(
        redirect({
            hash: '#root-version'
        }),
        '/maplibre-gl-js-docs/style-spec/root/#version'
    );

    t.equal(
        redirect({
            hash: '#sources-vector'
        }),
        '/maplibre-gl-js-docs/style-spec/sources/#vector'
    );

    t.equal(
        redirect({
            hash: '#sources-vector-url'
        }),
        '/maplibre-gl-js-docs/style-spec/sources/#vector-url'
    );

    t.equal(
        redirect({
            hash: '#sources-raster-dem-url'
        }),
        '/maplibre-gl-js-docs/style-spec/sources/#raster-dem-url'
    );

    t.equal(
        redirect({
            hash: '#sprite'
        }),
        '/maplibre-gl-js-docs/style-spec/sprite/'
    );

    t.equal(
        redirect({
            hash: '#glyphs'
        }),
        '/maplibre-gl-js-docs/style-spec/glyphs/'
    );

    t.equal(
        redirect({
            hash: '#transition-duration'
        }),
        '/maplibre-gl-js-docs/style-spec/transition/#duration'
    );

    t.equal(
        redirect({
            hash: '#layer-id'
        }),
        '/maplibre-gl-js-docs/style-spec/layers/#id'
    );
    t.equal(
        redirect({
            hash: '#layers-background'
        }),
        '/maplibre-gl-js-docs/style-spec/layers/#background'
    );
    t.equal(
        redirect({
            hash: '#layout-background-visibility'
        }),
        '/maplibre-gl-js-docs/style-spec/layers/#layout-background-visibility'
    );

    t.equal(
        redirect({
            hash: '#types-color'
        }),
        '/maplibre-gl-js-docs/style-spec/types/#color'
    );

    t.equal(
        redirect({
            hash: '#data-expressions'
        }),
        '/maplibre-gl-js-docs/style-spec/expressions/#data-expressions'
    );

    t.equal(
        redirect({
            hash: '#expressions-types-array'
        }),
        '/maplibre-gl-js-docs/style-spec/expressions/#types-array'
    );

    t.equal(
        redirect({
            hash: '#other-function'
        }),
        '/maplibre-gl-js-docs/style-spec/other/#function'
    );

    t.equal(
        redirect({
            hash: '#other-filter'
        }),
        '/maplibre-gl-js-docs/style-spec/other/#other-filter'
    );

    t.equal(
        redirect({
            hash: '#paint-fill-fill-color'
        }),
        '/maplibre-gl-js-docs/style-spec/layers/#paint-fill-fill-color'
    );

    t.equal(
        redirect({
            hash: '#hello-world'
        }),
        undefined
    );
    t.end();
});
