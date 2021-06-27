---
title: Display a custom map
description: Initialize a custom map in an HTML element with MapLibre GL JS.
topics:
  - Getting started
  - Styles
thumbnail: simple-map
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './custom-map.html';"
---

Initialize a custom map in an HTML element with MapLibre GL JS.

This example assumes that you have saved the [Demotiles](https://github.com/maplibre/demotiles) offline in the directory `../../` relative to your `html` file.

{{ <Example html={html} {...this.props} /> }}

[tiles/tiles.json](https://github.com/maplibre/demotiles/blob/gh-pages/tiles/tiles.json)

```
{
    "tilejson": "2.0.0",
    "name": "maplibre",
    "type": "baselayer",
    "scale": "1.000000",
    "bounds": [
        -180,
        -85.051129,
        180,
        85.05112900000002
    ],
    ...
    "extent": [
        -20037508.342789244,
        -20037508.6269291,
        20037508.342789244,
        20037508.626929108
    ],
    "center": [
        0,
        2.5444437451708134e-14,
        1
    ],
    "tiles": [
        "custom://demotiles/tiles/{z}/{x}/{y}.pbf"
    ]
}
```

[style.json](https://github.com/maplibre/demotiles/blob/gh-pages/style.json)
```
{
    "id": "43f36e14-e3f5-43c1-84c0-50a9c80dc5c7",
    "name": "MapLibre",
    "zoom": 0.8619833357855968,
    "pitch": 0,
    "center": [
        17.65431710431244,
        32.954120326746775
    ],
    "glyphs": "../../demotiles/font/{fontstack}/{range}.pbf",
    "layers": [
        {
          ...
        },

    ...
    "bearing": 0,
    "sources": {
        "maplibre": {
            "url": "../../demotiles/tiles/tiles.json",
            "type": "vector"
        }
    },
    "version": 8,
    "metadata": {
        "maptiler:copyright": "This style was generated on MapTiler Cloud. Usage outside of MapTiler Cloud or MapTiler Server requires valid MapTiler Data package: https://www.maptiler.com/data/ -- please contact us.",
        "openmaptiles:version": "3.x"
    }
}
```




For more information, see the [PR](https://github.com/maplibre/maplibre-gl-js/pull/30) that introduced this feature.
