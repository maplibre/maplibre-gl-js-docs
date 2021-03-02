const test = require('tape');
const redirect = require('../docs/util/style-spec-redirect.js');

const rootPath = '/maplibre-gl-js'

test(`style-spec-redirect`, (t) => {
    t.equal(
        redirect({
            hash: '#light-anchor'
        }),
        `${rootPath}/style-spec/light/#anchor`
    );

    t.equal(
        redirect({
            hash: '#root-version'
        }),
        `${rootPath}/style-spec/root/#version`
    );

    t.equal(
        redirect({
            hash: '#sources-vector'
        }),
        `${rootPath}/style-spec/sources/#vector`
    );

    t.equal(
        redirect({
            hash: '#sources-vector-url'
        }),
        `${rootPath}/style-spec/sources/#vector-url`
    );

    t.equal(
        redirect({
            hash: '#sources-raster-dem-url'
        }),
        `${rootPath}/style-spec/sources/#raster-dem-url`
    );

    t.equal(
        redirect({
            hash: '#sprite'
        }),
        `${rootPath}/style-spec/sprite/`
    );

    t.equal(
        redirect({
            hash: '#glyphs'
        }),
        `${rootPath}/style-spec/glyphs/`
    );

    t.equal(
        redirect({
            hash: '#transition-duration'
        }),
        `${rootPath}/style-spec/transition/#duration`
    );

    t.equal(
        redirect({
            hash: '#layer-id'
        }),
        `${rootPath}/style-spec/layers/#id`
    );
    t.equal(
        redirect({
            hash: '#layers-background'
        }),
        `${rootPath}/style-spec/layers/#background`
    );
    t.equal(
        redirect({
            hash: '#layout-background-visibility'
        }),
        `${rootPath}/style-spec/layers/#layout-background-visibility`
    );

    t.equal(
        redirect({
            hash: '#types-color'
        }),
        `${rootPath}/style-spec/types/#color`
    );

    t.equal(
        redirect({
            hash: '#data-expressions'
        }),
        `${rootPath}/style-spec/expressions/#data-expressions`
    );

    t.equal(
        redirect({
            hash: '#expressions-types-array'
        }),
        `${rootPath}/style-spec/expressions/#types-array`
    );

    t.equal(
        redirect({
            hash: '#other-function'
        }),
        `${rootPath}/style-spec/other/#function`
    );

    t.equal(
        redirect({
            hash: '#other-filter'
        }),
        `${rootPath}/style-spec/other/#other-filter`
    );

    t.equal(
        redirect({
            hash: '#paint-fill-fill-color'
        }),
        `${rootPath}/style-spec/layers/#paint-fill-fill-color`
    );

    t.equal(
        redirect({
            hash: '#hello-world'
        }),
        undefined
    );
    t.end();
});
