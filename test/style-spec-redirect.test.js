const test = require('tape');
const redirect = require('../docs/util/style-spec-redirect.js');

const rootPath = '/maplibre-gl-js'

test(`style-spec-redirect`, (t) => {
    t.equal(
        redirect({
            hash: '#light-anchor'
        }),
        `${pathRoot}/style-spec/light/#anchor`
    );

    t.equal(
        redirect({
            hash: '#root-version'
        }),
        `${pathRoot}/style-spec/root/#version`
    );

    t.equal(
        redirect({
            hash: '#sources-vector'
        }),
        `${pathRoot}/style-spec/sources/#vector`
    );

    t.equal(
        redirect({
            hash: '#sources-vector-url'
        }),
        `${pathRoot}/style-spec/sources/#vector-url`
    );

    t.equal(
        redirect({
            hash: '#sources-raster-dem-url'
        }),
        `${pathRoot}/style-spec/sources/#raster-dem-url`
    );

    t.equal(
        redirect({
            hash: '#sprite'
        }),
        `${pathRoot}/style-spec/sprite/`
    );

    t.equal(
        redirect({
            hash: '#glyphs'
        }),
        `${pathRoot}/style-spec/glyphs/`
    );

    t.equal(
        redirect({
            hash: '#transition-duration'
        }),
        `${pathRoot}/style-spec/transition/#duration`
    );

    t.equal(
        redirect({
            hash: '#layer-id'
        }),
        `${pathRoot}/style-spec/layers/#id`
    );
    t.equal(
        redirect({
            hash: '#layers-background'
        }),
        `${pathRoot}/style-spec/layers/#background`
    );
    t.equal(
        redirect({
            hash: '#layout-background-visibility'
        }),
        `${pathRoot}/style-spec/layers/#layout-background-visibility`
    );

    t.equal(
        redirect({
            hash: '#types-color'
        }),
        `${pathRoot}/style-spec/types/#color`
    );

    t.equal(
        redirect({
            hash: '#data-expressions'
        }),
        `${pathRoot}/style-spec/expressions/#data-expressions`
    );

    t.equal(
        redirect({
            hash: '#expressions-types-array'
        }),
        `${pathRoot}/style-spec/expressions/#types-array`
    );

    t.equal(
        redirect({
            hash: '#other-function'
        }),
        `${pathRoot}/style-spec/other/#function`
    );

    t.equal(
        redirect({
            hash: '#other-filter'
        }),
        `${pathRoot}/style-spec/other/#other-filter`
    );

    t.equal(
        redirect({
            hash: '#paint-fill-fill-color'
        }),
        `${pathRoot}/style-spec/layers/#paint-fill-fill-color`
    );

    t.equal(
        redirect({
            hash: '#hello-world'
        }),
        undefined
    );
    t.end();
});
