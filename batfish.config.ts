import webpack from 'webpack';
import mapboxAssembly from '@mapbox/mbx-assembly';
import path from 'path';
import apiNavigation from './docs/data/api-navigation';
import { buildApiSearch } from './docs/util/build-api-search';
import {
    buildNavigation,
    buildFilters
} from '@mapbox/dr-ui/helpers/batfish/index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("TESTE", __dirname)
const addPages = [
    // {
    //     title: 'Tutorials',
    //     path: 'https://docs.mapbox.com/help/tutorials?product=Mapbox+GL+JS',
    //     navOrder: 5
    // },
    // {
    //     title: 'Troubleshooting',
    //     path:
    //         'https://docs.mapbox.com/help/troubleshooting?product=Mapbox+GL+JS',
    //     navOrder: 6
    // }
];

const siteBasePath = '/maplibre-gl-js-docs';
export default (): object => {
    let config = {
        siteBasePath: siteBasePath,
        siteOrigin: 'https://maplibre.github.io',
        pagesDirectory: `${__dirname}/batfish-input/docs/pages`,
        outputDirectory: path.join(__dirname, '_site'),
        browserslist: mapboxAssembly.browsersList,
        postcssPlugins: mapboxAssembly.postcssPipeline.plugins,
        productionDevtool: 'source-map',
        stylesheets: [
            require.resolve('@mapbox/mbx-assembly/dist/assembly.css'),
            require.resolve('@mapbox/dr-ui/css/docs-prose.css'),
            `${__dirname}/batfish-input/docs/components/site.css`,
            require.resolve('@mapbox/dr-ui/css/prism.css'),
            `${__dirname}/batfish-input/vendor/docs-page-shell/page-shell-styles.css`
        ],
        applicationWrapperPath: `${__dirname}/batfish-input/docs/components/application-wrapper.js`,
        webpackLoaders: [
            // Use raw loader to get the HTML string contents of examples
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /@maplibre\/maplibre-gl-style-spec\/expression\/definitions\/index.js$/,
                sideEffects: true
            }
        ],
        ignoreWithinPagesDirectory: ['example/*.html'],
        webpackPlugins: [
            // Make environment variables available within JS that Webpack compiles.
            new webpack.DefinePlugin({
                // DEPLOY_ENV is used in config to pick between local/production.
                'process.env.DEPLOY_ENV': `"${process.env.DEPLOY_ENV}"`
            })
        ],
        inlineJs: [
            {
                filename: `${__dirname}/batfish-input/vendor/docs-page-shell/page-shell-script.js`
            }
        ],
        jsxtremeMarkdownOptions: {
            getWrapper: () => {
                return path.join(__dirname, './batfish-input/docs/components/page-shell.js');
            },
            rehypePlugins: [
                import('rehype-slug'),
                import('@mapbox/rehype-prism'),
                import('@mapbox/dr-ui/plugins/add-links-to-headings'),
                import('@mapbox/dr-ui/plugins/make-table-scroll')
            ]
        },
        dataSelectors: {
            apiSearch: () => buildApiSearch(),
            apiNavigation: () => apiNavigation,
            navigation: (data) =>
                buildNavigation({ siteBasePath, data, addPages }),
            filters: (data) => buildFilters(data)
        },
        devBrowserslist: false,
        babelInclude: [
            'documentation',
            '@maplibre/maplibre-gl-style-spec',
            'fuse.js'
        ],
        webpackStaticIgnore: [/util\/util\.js$/],
        unprocessedPageFiles: ['**/dist/**/*.*']
    };

    // Local builds treat the `dist` directory as static assets, allowing you to test examples against the
    // local branch build. Non-local builds ignore the `dist` directory, and examples load assets from the CDN.
    config["unprocessedPageFiles"] = ['**/dist/**/*.*'];
    if (process.env.DEPLOY_ENV !== 'local') {
        config.ignoreWithinPagesDirectory.push('**/dist/**/*.*');
    }

    return config;
};
