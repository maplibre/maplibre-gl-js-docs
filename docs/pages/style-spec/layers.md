---
title: Layers
id: layers
description: A style's layers property lists all of the layers available in that style.
contentType: specification
prependJs:
    - "import Items from '../../components/style-spec/items';"
    - "import { layerTypes } from '../../data/types';"
    - "import ref from '../../../mapbox-gl-js/src/style-spec/reference/latest';"
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
https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/reference/v8.json.
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
https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/reference/v8.json.
-->


## background

{{
<React.Fragment>
  <Items headingLevel="3" kind="layout" section={`layout-background`} entry={ref[`layout_background`]} />
  <Items headingLevel="3" kind="paint" section={`paint-background`} entry={ref[`paint_background`]} />
</React.Fragment>
}}

## fill

{{
<React.Fragment>
  <Items headingLevel="3" kind="layout" section={`layout-fill`} entry={ref[`layout_fill`]} />
  <Items headingLevel="3" kind="paint" section={`paint-fill`} entry={ref[`paint_fill`]} />
</React.Fragment>
}}

## line

{{
<React.Fragment>
  <Items kind="layout" section={`layout-line`} entry={ref[`layout_line`]} />
  <Items kind="paint" section={`paint-line`} entry={ref[`paint_line`]} />
</React.Fragment>
}}

## symbol

{{
<React.Fragment>
  <Items kind="layout" section={`layout-symbol`} entry={ref[`layout_symbol`]} />
  <Items kind="paint" section={`paint-symbol`} entry={ref[`paint_symbol`]} />
</React.Fragment>
}}

## raster

{{
<React.Fragment>
  <Items kind="layout" section={`layout-raster`} entry={ref[`layout_raster`]} />
  <Items kind="paint" section={`paint-raster`} entry={ref[`paint_raster`]} />
</React.Fragment>
}}

## circle

{{
<React.Fragment>
  <Items kind="layout" section={`layout-circle`} entry={ref[`layout_circle`]} />
  <Items kind="paint" section={`paint-circle`} entry={ref[`paint_circle`]} />
</React.Fragment>
}}

## fill-extrusion

{{
<React.Fragment>
  <Items kind="layout" section={`layout-fill-extrusion`} entry={ref[`layout_fill-extrusion`]} />
  <Items kind="paint" section={`paint-fill-extrusion`} entry={ref[`paint_fill-extrusion`]} />
</React.Fragment>
}}

## heatmap

{{
<React.Fragment>
  <Items kind="layout" section={`layout-heatmap`} entry={ref[`layout_heatmap`]} />
  <Items kind="paint" section={`paint-heatmap`} entry={ref[`paint_heatmap`]} />
</React.Fragment>
}}

## hillshade

{{
<React.Fragment>
  <Items kind="layout" section={`layout-hillshade`} entry={ref[`layout_hillshade`]} />
  <Items kind="paint" section={`paint-hillshade`} entry={ref[`paint_hillshade`]} />
</React.Fragment>
}}

<!-- END GENERATED CONTENT -->
