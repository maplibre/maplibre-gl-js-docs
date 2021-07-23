---
title: Change a layer's color with buttons
description: Use setPaintProperty to change a layer's fill color.
topics:
  - Layers
  - User interaction
thumbnail: color-switcher
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './color-switcher.html';"
---

Use [`setPaintProperty`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#setpaintproperty) to change a layer's fill color.

{{ <Example html={html} {...this.props} /> }}
