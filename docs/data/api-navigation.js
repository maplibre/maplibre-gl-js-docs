// this script is executed as a dataSelector in batfish.config.js
// the content is available with:
// import apiNavigation from '@mapbox/batfish/data/api-navigation';
// when making changes to this file, you must rerun batfish (npm start)
const slug = require('slugg');
const apiFilterItems = require('../util/api-filter-items.js');

module.exports = [
    {
        title: 'Introduction',
        path: '',
        subnav: [
            {
                title: 'Quickstart',
                path: 'quickstart'
            },
            {
                title: 'Reading this documentation',
                path: 'reading-this-documentation'
            },
            {
                title: 'CSP Directives',
                path: 'csp-directives'
            },
            {
                title: 'Referrer Policies',
                path: 'referrer-policies'
            },
            {
                title: 'Mapbox CSS',
                path: 'mapbox-css'
            }
        ]
    },
    {
        title: 'Map',
        path: 'map',
        subnav: buildSubSubNav(
            apiFilterItems('Map class')[0].members.static[0], // Hack to resolve naming documentaiton.yml conflict b/w the "Map" class and the "Map" section
            'map'
        )
    },
    {
        title: 'Properties and options',
        path: 'properties',
        subnav: buldSubNav('Properties and options')
    },
    {
        title: 'Markers and controls',
        path: 'markers',
        subnav: buldSubNav('Markers and controls')
    },

    {
        title: 'Geography and geometry',
        path: 'geography',
        subnav: buldSubNav('Geography and geometry')
    },
    {
        title: 'User interaction handlers',
        path: 'handlers',
        subnav: buldSubNav('User interaction handlers')
    },
    {
        title: 'Sources',
        path: 'sources',
        subnav: buldSubNav('Sources')
    },
    {
        title: 'Events',
        path: 'events',
        subnav: buldSubNav('Events')
    }
];

function buldSubNav(section) {
    const items = apiFilterItems(section)[0].members.static;
    return items.map(item => ({
        title: item.name,
        path: slug(item.namespace),
        subnav: buildSubSubNav(item, item.name)
    }));
}

function buildSubSubNav(item, section) {
    const arr = [];

    if (
        item.params &&
        item.params.length > 0 &&
        (item.kind !== 'class' ||
            !item.constructorComment ||
            item.constructorComment.access !== 'private')
    ) {
        arr.push({
            title: 'Parameters',
            path: slug(`${section} Parameters`)
        });
    }
    if (item.properties && item.properties.length > 0) {
        arr.push({
            title: 'Properties',
            path: slug(`${section} Properties`)
        });
    }
    if (item.returns && item.returns.length > 0) {
        arr.push({
            title: 'Returns',
            path: slug(`${section} Returns`)
        });
    }
    if (item.examples && item.examples.length > 0) {
        arr.push({
            title: 'Example',
            path: slug(`${section} Example`)
        });
    }
    if (item.members && item.members.static.length > 0) {
        arr.push({
            title: 'Static members',
            path: slug(`${section} Static members`)
        });
    }
    if (item.members && item.members.instance.length > 0) {
        arr.push({
            title: 'Instance members',
            path: slug(`${section} Instance members`)
        });
    }
    if (item.members && item.members.events.length > 0) {
        arr.push({
            title: 'Events',
            path: slug(`${section} Events`)
        });
    }
    if (item.sees && item.sees.length > 0) {
        arr.push({
            title: 'Related',
            path: slug(`${section} Related`)
        });
    }

    return arr;
}
