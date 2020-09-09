const rc = require('@mapbox/remark-config-docs');
const topicsOrder = require('./docs/data/topics.json');

const config = {
    siteBasePath: 'mapbox-gl-js',
    pages: 'docs/pages/',
    constants: 'docs/constants.json',
    ignoreLinks: 'conf/ignore-links.json',
    descriptionLength: 1200,
    topicOptions: topicsOrder
};

exports.plugins = [...rc.plugins(config)];
