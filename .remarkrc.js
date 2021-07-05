const topicsOrder = require('./docs/data/topics.json');

const config = [
    ['@mapbox/remark-lint-link-text', [2]],
    ['remark-lint-heading-increment', [2]],
    [
        '@mapbox/remark-lint-mapbox/link-checker/skip-internal',
        [
            1,
            {
                siteBasePath: 'maplibre-gl-js-docs',
                pages: 'docs/pages/',
                constants: 'docs/constants.json',
                ignoreLinks: 'conf/ignore-links.json'
            }
        ]
    ],
    [
        '@mapbox/remark-lint-mapbox/link-checker/skip-external',
        [
            1,
            {
                siteBasePath: 'maplibre-gl-js-docs',
                pages: 'docs/pages/',
                constants: 'docs/constants.json',
                ignoreLinks: 'conf/ignore-links.json'
            }
        ]
    ],
    [
        '@mapbox/remark-lint-mapbox/constantly',
        [
            2,
            {
                constants: 'docs/constants.json'
            }
        ]
    ],
    ['remark-frontmatter', ['yaml']],
    [
        '@mapbox/remark-lint-mapbox/frontmatter',
        {
            disableProducts: true,
            topicOptions: topicsOrder
        }
    ],
    ['@mapbox/remark-lint-mapbox/xtreme', [2]]
];

exports.plugins = [...config];
