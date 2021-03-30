---
title: Add a new layer below labels
description: Use the second argument of addLayer to add a layer below labels.
topics:
  - Layers
thumbnail: geojson-layer-in-stack
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './geojson-layer-in-stack.html';"
---

Use the second argument of [`addLayer`](/mapbox-gl-js/api/#map#addlayer), you can be more precise when adding a new layer below labels.

{{ <Example html={html} {...this.props} /> }}
