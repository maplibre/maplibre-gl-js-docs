---
title: Add a GeoJSON line
description: Add a GeoJSON line to a map using addSource, then style it using addLayer’s paint properties.
topics:
  - Layers
thumbnail: geojson-line
contentType: example
hideFeedback: true
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './geojson-line.html';"
---

Add a GeoJSON line to a map using [`addSource`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addsource), then style it using [`addLayer`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addlayer)’s [`paint`](https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#line) properties.

{{ <Example html={html} {...this.props} /> }}
