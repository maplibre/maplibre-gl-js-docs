---
title: Layers
id: layers
description: A style's layers property lists all of the layers available in that style.
contentType: specification
products:
- Mapbox Style Specification
prependJs:
    - "import Items from '../../components/style-spec/items';"
    - "import { layerTypes } from '../../data/types';"
    - "import combineItems from '../../util/combine-items';"
    - "import ref from '@mapbox/mapbox-gl-style-spec/reference/latest';"
---

A style's `layers` property lists all the layers available in that style. The type of layer is specified by the `"type"` property, and must be one of {{layerTypes.map((t, i) => <var key={i}>{t}</var>).reduce((prev, curr) => [prev, ', ', curr])}}.

Except for layers of the <var>background</var> type, each layer needs to refer to a source. Layers take the data that they get from a source, optionally filter features, and then define how those features are styled.

```json
"layers": {{JSON.stringify(
    ref.$root.layers.example,
    null,
    2
    )}}
```

<!--
START GENERATED CONTENT:
Content in this section is generated directly using the Mapbox Style
Specification. To update any content displayed in this section, make edits to:
https://github.com/mapbox/mapbox-gl-js/blob/main/src/style-spec/reference/v8.json.
-->
{{ <Items entry={ref.layer} />}}
<!-- END GENERATED CONTENT -->

{{<a id="layout-property" className="anchor" />}}
{{<a id="paint-property" className="anchor" />}}

<hr className='my36' />

Layers have two sub-properties that determine how data from that layer is rendered: `layout` and `paint` properties.

_Layout properties_ appear in the layer's `"layout"` object. They are applied early in the rendering process and define how data for that layer is passed to the GPU. Changes to a layout property require an asynchronous "layout" step.

_Paint properties_ are applied later in the rendering process. Paint properties appear in the layer's `"paint"` object. Changes to a paint property are cheap and happen synchronously.

<!--
START GENERATED CONTENT:
Content in this section is generated directly using the Mapbox Style
Specification. To update any content displayed in this section, make edits to:
https://github.com/mapbox/mapbox-gl-js/blob/main/src/style-spec/reference/v8.json.
-->

## background

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'background')} /> }}

## fill

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'fill')} /> }}

## line

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'line')} /> }}

## symbol

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'symbol')} /> }}

## raster

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'raster')} /> }}

## circle

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'circle')} /> }}

## fill-extrusion

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'fill-extrusion')} /> }}

## heatmap

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'heatmap')} /> }}

## hillshade

{{<Items headingLevel="3" entry={combineItems(['layout','paint'], 'hillshade')} /> }}

<!-- END GENERATED CONTENT -->
