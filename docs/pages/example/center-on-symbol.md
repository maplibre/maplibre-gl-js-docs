---
title: Center the map on a clicked symbol
description: Use events and flyTo to center the map on a symbol.
topics:
  - Camera
  - User interaction
thumbnail: center-on-symbol
contentType: example
hideFeedback: true
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './center-on-symbol.html';"
---

Use events and [`flyTo`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#flyto) to center the map on a [`symbol`](https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#symbol).

{{ <Example html={html} {...this.props} /> }}
