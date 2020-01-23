---
title: Transition
id: transition
description: A transition property controls timing for the interpolation between a transitionable style property's previous value and new value.
contentType: specification
prependJs:
    - "import Items from '../../components/style-spec/items';"
    - "import ref from '../../../mapbox-gl-js/src/style-spec/reference/latest';"
---

A `transition` property controls timing for the interpolation between a transitionable style property's previous value and new value. A style's <a href="#root-transition" title="link to root-transition">root `transition`</a> property provides global transition defaults for that style. Any transitionable style property may also have its own `-transition` property that defines specific transition timing for that specific layer property, overriding the global `transition` values.

```json
"transition": {{JSON.stringify(
    ref.$root.transition.example,
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
{{<Items headingLevel='2' entry={ref.transition} />}}
<!-- END GENERATED CONTENT -->
