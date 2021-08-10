---
title: Add a new layer below labels
description: Use the second argument of addLayer to add a layer below labels.
topics:
  - Layers
thumbnail: geojson-layer-in-stack
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './geojson-layer-in-stack.html';"
---

Use the second argument of [`addLayer`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addlayer), you can be more precise when adding a new layer below labels.

{{ <Example html={html} {...this.props} /> }}
