---
title: Show drawn polygon area
description: Use mapbox-gl-draw to draw a polygon and Turf.js to calculate its area in square meters.
topics:
  - Controls and overlays
thumbnail: mapbox-gl-draw
contentType: example
hideFeedback: true
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-draw.html';"
---

Use [mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw) to draw a polygon and [Turf.js](http://turfjs.org/) to calculate its area in square meters.

{{ <Example html={html} {...this.props} /> }}
