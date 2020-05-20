---
title: Light
id: light
description: A style's light property provides global light source for that style.
contentType: specification
prependJs:
    - "import Items from '../../components/style-spec/items';"
    - "import ref from '@mapbox/mapbox-gl-style-spec/reference/latest';"
---

A style's `light` property provides global light source for that style.

```json
"light": {{JSON.stringify(
    ref.$root.light.example,
    null,
    2
)}}
```

<!--
START GENERATED CONTENT:
Content in this section is generated directly using the Mapbox Style
Specification. To update any content displayed in this section, make edits to:
https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/reference/v8.json.
-->
{{ <Items headingLevel='2' entry={ref.light} /> }}
<!-- END GENERATED CONTENT -->
