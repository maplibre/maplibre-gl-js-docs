---
title: Add live realtime data
description: Use realtime GeoJSON data streams to move a symbol on your map.
topics:
  - Sources
thumbnail: live-geojson
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './live-geojson.html';"
---

Use realtime GeoJSON data streams to move a [`symbol`](https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#symbol) on your map.

{{ <Example html={html} {...this.props} /> }}
