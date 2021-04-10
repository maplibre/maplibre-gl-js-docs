---
title: Fit a map to a bounding box
description: Fit the map to a specific area, regardless of the pixel size of the map.
topics:
  - Camera
thumbnail: fitbounds
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './fitbounds.html';"
---

Use [`fitBounds`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#fitbounds) to show a specific area of the map in view, regardless of the pixel size of the map.

{{ <Example html={html} {...this.props} /> }}
