import { types } from '../expression-metadata';
import ref from '../../../mapbox-gl-js/src/style-spec/reference/latest';
import definitions from '../../../mapbox-gl-js/src/style-spec/expression/definitions/index.js';

// help us catch that every type in expression-metadata.js exists in the style-spec
// otherwise the site will not build
describe('expression-metadata.js type exists in mapbox-gl-js-style-spec', () => {
    for (const name in types) {
        it(name, () => {
            expect(ref['expression_name'].values[name]).not.toBeUndefined();
        });
    }
});

// help us catch expressions we need to add to expression-metadata.js during version bumps
// otherwise the definition/type will not be added to the site
describe('mapbox-gl-js-style-spec definition appears in expression-metadata.js', () => {
    for (let name in definitions) {
        if (!/^filter-/.test(name) && name !== 'error') {
            it(name, () => {
                expect(types[name]).not.toBeUndefined();
            });
        }
    }
});
