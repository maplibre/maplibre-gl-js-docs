---
title: Display line that crosses 180th meridian
description: Draw a line across the 180th meridian using a GeoJSON source.
topics:
  - Sources
  - Layers
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
thumbnail: line-across-180th-meridian
prependJs:
- "import Example from '../../components/example';"
- "import html from './line-across-180th-meridian.html';"
---

Draw a line across the 180th meridian using a [GeoJSON source](https://maplibre.org/maplibre-gl-style-spec/sources/#geojson).

{{ <Example html={html} {...this.props} /> }}
