import entries from 'object.entries';
import slug from 'slugg';
import ref from '@mapbox/mapbox-gl-style-spec/reference/latest';
import { layerTypes, groupedExpressions } from './types';

/*
This object powers the sidebar navigation for the Style Specification page.
IMPORTANT: Match the heading (h2, h3) and <Property> hierarchy found in each respective page.
*/

const icons = {
    paint: 'paint',
    layout: 'line'
};

// generates subnav using the style-spec reference data
function makeSubNav(entry, section) {
    return entries(entry)
        .sort()
        .reduce((arr, [name]) => {
            if (
                [
                    'vector',
                    'raster',
                    'raster-dem',
                    'geojson',
                    'image',
                    'video'
                ].indexOf(section) > -1 &&
                (name === '*' || name === 'type')
            )
                return arr;
            else {
                const sectionName = section ? section.split('-')[0] : undefined;
                const icon =
                    section && sectionName ? icons[sectionName] : undefined;
                arr.push({
                    title: name,
                    icon: icon || undefined,
                    name: name,
                    path: `${section ? `${section}-` : ''}${name}`
                });
            }

            return arr;
        }, []);
}

export const styleSpecNavigation = [
    { title: 'Introduction', path: '' },
    {
        title: 'Root',
        path: 'root',
        subnav: makeSubNav(ref.$root)
    },
    {
        title: 'Light',
        path: 'light',
        subnav: makeSubNav(ref.light)
    },
    {
        title: 'Sources',
        path: 'sources',
        subnav: [
            {
                title: 'vector',
                path: 'vector',
                subnav: makeSubNav(ref.source_vector, 'vector')
            },
            {
                title: 'raster',
                path: 'raster',
                subnav: makeSubNav(ref.source_raster, 'raster')
            },
            {
                title: 'raster-dem',
                path: 'raster-dem',
                subnav: makeSubNav(ref.source_raster_dem, 'raster-dem')
            },
            {
                title: 'geojson',
                path: 'geojson',
                subnav: makeSubNav(ref.source_geojson, 'geojson')
            },
            {
                title: 'image',
                path: 'image',
                subnav: makeSubNav(ref.source_image, 'image')
            },
            {
                title: 'video',
                path: 'video',
                subnav: makeSubNav(ref.source_video, 'video')
            }
        ]
    },
    {
        title: 'Sprite',
        path: 'sprite'
    },
    {
        title: 'Glyphs',
        path: 'glyphs'
    },
    {
        title: 'Transition',
        path: 'transition',
        subnav: makeSubNav(ref.transition)
    },
    {
        title: 'Layers',
        path: 'layers',
        subnav: layerTypes.map(type => {
            return {
                title: type,
                path: type,
                subnav: [
                    ...makeSubNav(ref[`layout_${type}`], `layout-${type}`),
                    ...makeSubNav(ref[`paint_${type}`], `paint-${type}`)
                ].sort((a, b) => a.name.localeCompare(b.name))
            };
        })
    },
    {
        title: 'Types',
        path: 'types',
        subnav: [
            {
                title: 'Color',
                path: 'color'
            },
            {
                title: 'Formatted',
                path: 'formatted'
            },
            {
                title: 'ResolvedImage',
                path: 'resolvedImage'
            },
            {
                title: 'String',
                path: 'string'
            },
            {
                title: 'Boolean',
                path: 'boolean'
            },
            {
                title: 'Number',
                path: 'number'
            },
            {
                title: 'Array',
                path: 'array'
            }
        ]
    },
    {
        title: 'Expressions',
        path: 'expressions',
        subnav: groupedExpressions.map(group => {
            return {
                title: group.name,
                path: `${slug(group.name)}`,
                subnav: group.expressions.map(g => {
                    return {
                        title: g.name,
                        path: `${group.name === 'Types' ? 'types-' : ''}${slug(
                            g.name
                        ) || g.name}`
                    };
                })
            };
        })
    },
    {
        title: 'Other',
        path: 'other',
        tag: 'legacy',
        subnav: [
            {
                title: 'Function',
                path: 'function',
                subnav: [
                    'stops',
                    'property',
                    'base',
                    'type',
                    'default',
                    'colorSpace'
                ].map(title => {
                    return {
                        title,
                        path: `function-${title}`
                    };
                })
            },
            {
                title: 'Other filter',
                path: 'other-filter',
                subnav: [
                    'Existential filters',
                    'Comparison filters',
                    'Set membership filters',
                    'Combining filters'
                ].map(title => {
                    return {
                        title,
                        path: slug(title)
                    };
                })
            }
        ]
    }
];
