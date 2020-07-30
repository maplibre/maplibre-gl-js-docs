const webpack = require('webpack');
const mapboxAssembly = require('@mapbox/mbx-assembly');
const path = require('path');
const apiNavigation = require('./docs/data/api-navigation');
const { buildApiSearch } = require('./docs/util/build-api-search');

module.exports = () => {
    const config = {
        siteBasePath: '/mapbox-gl-js',
        siteOrigin: 'https://docs.mapbox.com',
        pagesDirectory: `${__dirname}/docs/pages`,
        outputDirectory: path.join(__dirname, '_site'),
        browserslist: mapboxAssembly.browsersList,
        postcssPlugins: mapboxAssembly.postcssPipeline.plugins,
        productionDevtool: 'source-map',
        stylesheets: [
            require.resolve('@mapbox/mbx-assembly/dist/assembly.css'),
            require.resolve('@mapbox/dr-ui/css/docs-prose.css'),
            `${__dirname}/docs/components/site.css`,
            require.resolve('@mapbox/dr-ui/css/prism.css'),
            `${__dirname}/vendor/docs-page-shell/page-shell-styles.css`
        ],
        applicationWrapperPath: `${__dirname}/docs/components/application-wrapper.js`,
        webpackLoaders: [
            // Use raw loader to get the HTML string contents of examples
            {
                test: /\.html$/,
                use: 'raw-loader'
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
                filename: `${__dirname}/vendor/docs-page-shell/page-shell-script.js`
            }
        ],
        jsxtremeMarkdownOptions: {
            getWrapper: () => {
                return path.join(
                    __dirname,
                    './docs/components/markdown-page-shell.js'
                );
            },
            rehypePlugins: [
                require('rehype-slug'),
                require('@mapbox/rehype-prism'),
                require('@mapbox/dr-ui/plugins/add-links-to-headings'),
                require('@mapbox/dr-ui/plugins/create-sections'),
                require('@mapbox/dr-ui/plugins/make-table-scroll')
            ]
        },
        dataSelectors: {
            apiSearch: () => buildApiSearch(),
            examples: ({ pages }) => {
                return pages
                    .filter(
                        ({ path, frontMatter }) =>
                            /\/example\//.test(path) && frontMatter.tags
                    )
                    .map(example => {
                        return {
                            path: example.path,
                            title: example.frontMatter.title,
                            description: example.frontMatter.description,
                            tags: example.frontMatter.tags,
                            thumbnail: example.frontMatter.thumbnail
                        };
                    });
            },
            listSubfolders: data => {
                const folders = data.pages
                    .filter(file => {
                        return file.path.split('/').length === 4;
                    })
                    .map(folder => {
                        return folder;
                    });
                return folders;
            },
            apiNavigation: () => {
                return apiNavigation;
            }
        },
        devBrowserslist: false,
        babelInclude: [
            'documentation',
            '@mapbox/mapbox-gl-style-spec',
            'fuse.js'
        ],
        webpackStaticIgnore: [/util\/util\.js$/]
    };

    // Local builds treat the `dist` directory as static assets, allowing you to test examples against the
    // local branch build. Non-local builds ignore the `dist` directory, and examples load assets from the CDN.
    config.unprocessedPageFiles = ['**/dist/**/*.*'];
    if (process.env.DEPLOY_ENV !== 'local') {
        config.ignoreWithinPagesDirectory.push('**/dist/**/*.*');
    }

    return config;
};
