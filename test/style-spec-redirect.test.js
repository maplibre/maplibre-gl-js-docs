const test = require('tape');
const redirect = require('../docs/util/style-spec-redirect.js');

test(`style-spec-redirect`, t => {
    t.equal(
        redirect({
            hash: '#light-anchor'
        }),
        '/mapbox-gl-js/style-spec/light/#anchor'
    );

    t.equal(
        redirect({
            hash: '#root-version'
        }),
        '/mapbox-gl-js/style-spec/root/#version'
    );

    t.equal(
        redirect({
            hash: '#sources-vector'
        }),
        '/mapbox-gl-js/style-spec/sources/#vector'
    );

    t.equal(
        redirect({
            hash: '#sources-vector-url'
        }),
        '/mapbox-gl-js/style-spec/sources/#vector-url'
    );

    t.equal(
        redirect({
            hash: '#sources-raster-dem-url'
        }),
        '/mapbox-gl-js/style-spec/sources/#raster-dem-url'
    );

    t.equal(
        redirect({
            hash: '#sprite'
        }),
        '/mapbox-gl-js/style-spec/sprite/'
    );

    t.equal(
        redirect({
            hash: '#glyphs'
        }),
        '/mapbox-gl-js/style-spec/glyphs/'
    );

    t.equal(
        redirect({
            hash: '#transition-duration'
        }),
        '/mapbox-gl-js/style-spec/transition/#duration'
    );

    t.equal(
        redirect({
            hash: '#layer-id'
        }),
        '/mapbox-gl-js/style-spec/layers/#id'
    );
    t.equal(
        redirect({
            hash: '#layers-background'
        }),
        '/mapbox-gl-js/style-spec/layers/#background'
    );
    t.equal(
        redirect({
            hash: '#layout-background-visibility'
        }),
        '/mapbox-gl-js/style-spec/layers/#layout-background-visibility'
    );

    t.equal(
        redirect({
            hash: '#types-color'
        }),
        '/mapbox-gl-js/style-spec/types/#color'
    );

    t.equal(
        redirect({
            hash: '#data-expressions'
        }),
        '/mapbox-gl-js/style-spec/expressions/#data-expressions'
    );

    t.equal(
        redirect({
            hash: '#expressions-types-array'
        }),
        '/mapbox-gl-js/style-spec/expressions/#types-array'
    );

    t.equal(
        redirect({
            hash: '#other-function'
        }),
        '/mapbox-gl-js/style-spec/other/#function'
    );

    t.equal(
        redirect({
            hash: '#other-filter'
        }),
        '/mapbox-gl-js/style-spec/other/#other-filter'
    );

    t.equal(
        redirect({
            hash: '#paint-fill-fill-color'
        }),
        '/mapbox-gl-js/style-spec/layers/#paint-fill-fill-color'
    );

    t.equal(
        redirect({
            hash: '#hello-world'
        }),
        undefined
    );
    t.end();
});
