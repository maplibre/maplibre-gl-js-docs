---
title: Root
id: root
description: Root level properties of a Mapbox style specify the map's layers, tile sources and other resources, and default values for the initial camera position when not specified elsewhere.
contentType: specification
prependJs:
    - "import Items from '../../components/style-spec/items';"
    - "import ref from '@mapbox/mapbox-gl-style-spec/reference/latest';"
---

Root level properties of a Mapbox style specify the map's layers, tile sources and other resources, and default values for the initial camera position when not specified elsewhere.

```json
{
    "version": {{ref.$version}},
    "name": "Mapbox Streets",
    "sprite": "mapbox://sprites/mapbox/streets-v{{ref.$version}}",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "sources": {...},
    "layers": [...]
}
```

<!--
START GENERATED CONTENT:
Content in this section is generated directly using the Mapbox Style
Specification. To update any content displayed in this section, make edits to:
https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/reference/v8.json.
-->
{{<Items headingLevel='2' entry={ref.$root} />}}
<!-- END GENERATED CONTENT -->
