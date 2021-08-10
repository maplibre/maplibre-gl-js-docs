---
title: Add a 3D model
description: Use a custom style layer with three.js to add a 3D model to the map.
topics:
  - Layers
thumbnail: add-3d-model
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-3d-model.html';"
---

Use a [custom style layer](https://maplibre.org/maplibre-gl-js-docs/api/properties/#customlayerinterface) with [three.js](https://threejs.org) to add a 3D model to the map.

{{ <Example html={html} {...this.props} /> }}
