const rc = require('@mapbox/remark-config-docs');
const config = {
    siteBasePath: 'mapbox-gl-js',
    pages: 'docs/pages/',
    constants: 'docs/constants.json',
    ignoreLinks: 'conf/ignore-links.json'
};

exports.plugins = [...rc.plugins(config)];
