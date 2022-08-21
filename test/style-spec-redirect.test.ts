import { redirect } from '../docs/util/style-spec-redirect';

describe(`style-spec-redirect`, () => {
    test('/maplibre-gl-js-docs/style-spec/light/#anchor', () => {
        expect(
            redirect({
                hash: '#light-anchor'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/root/#version', () => {
        expect(
            redirect({
                hash: '#root-version'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/sources/#vector', () => {
        expect(
            redirect({
                hash: '#sources-vector'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/sources/#vector-url', () => {
        expect(
            redirect({
                hash: '#sources-vector-url'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/sources/#raster-dem-url', () => {
        expect(
            redirect({
                hash: '#sources-raster-dem-url'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/sprite/', () => {
        expect(
            redirect({
                hash: '#sprite'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/glyphs/', () => {
        expect(
            redirect({
                hash: '#glyphs'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/transition/#duration', () => {
        expect(
            redirect({
                hash: '#transition-duration'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/layers/#id', () => {
        expect(
            redirect({
                hash: '#layer-id'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/layers/#background', () => {
        expect(
            redirect({
                hash: '#layers-background'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/layers/#layout-background-visibility', () => {
        expect(
            redirect({
                hash: '#layout-background-visibility'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/types/#color', () => {
        expect(
            redirect({
                hash: '#types-color'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/expressions/#data-expressions', () => {
        expect(
            redirect({
                hash: '#data-expressions'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/expressions/#types-array', () => {
        expect(
            redirect({
                hash: '#expressions-types-array'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/other/#function', () => {
        expect(
            redirect({
                hash: '#other-function'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/other/#other-filter', () => {
        expect(
            redirect({
                hash: '#other-filter'
            })
        ).toBeTruthy();
    });

    test('/maplibre-gl-js-docs/style-spec/layers/#paint-fill-fill-color', () => {
        expect(
            redirect({
                hash: '#paint-fill-fill-color'
            })
        ).toBeTruthy();
    });

    test('hello world', () => {
        expect(
            redirect({
                hash: '#hello-world'
            })
        ).toEqual(undefined);
    });
});
