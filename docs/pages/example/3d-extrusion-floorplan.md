---
title: Extrude polygons for 3D indoor mapping
description: Create a 3D indoor map with the fill-extrude-height paint property.
topics:
  - Layers
thumbnail: 3d-extrusion-floorplan
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './3d-extrusion-floorplan.html';"
---

Create a 3D indoor map with the [`fill-extrude-height`](https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#paint-fill-extrusion-fill-extrusion-height) paint property.

{{ <Example html={html} {...this.props} /> }}
