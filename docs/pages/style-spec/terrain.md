---
title: Terrain
id: terrain
description: A style's terrain property.
contentType: specification
order: 8
layout: page
products:
- Mapbox Style Specification
prependJs:
    - "import Items from '../../components/style-spec/items';"
    - "import ref from '@mapbox/mapbox-gl-style-spec/reference/latest';"
---

A style's `terrain` property is a global modifier that elevates layers and markers based on a DEM data source.

```json
"terrain": {
    "source": "mapbox-raster-dem",
    "exaggeration": 2
}
```

<!--
START GENERATED CONTENT:
Content in this section is generated directly using the Mapbox Style
Specification. To update any content displayed in this section, make edits to:
https://github.com/mapbox/mapbox-gl-js/blob/main/src/style-spec/reference/v8.json.
-->
{{ <Items headingLevel='2' entry={ref.terrain} /> }}
<!-- END GENERATED CONTENT -->
