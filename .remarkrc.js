const rc = require('@mapbox/remark-config-docs');
const topicsOrder = require('./docs/data/topics.json');

const config = {
    siteBasePath: 'maplibre-gl-js-docs',
    pages: 'docs/pages/',
    constants: 'docs/constants.json',
    ignoreLinks: 'conf/ignore-links.json',
    topicOptions: topicsOrder
};

exports.plugins = [...rc.plugins(config)];
