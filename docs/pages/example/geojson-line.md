---
title: Add a GeoJSON line
description: Add a GeoJSON line to a map using [`addSource`](/mapbox-gl-js/api/map/#map#addsource), then style it using [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer)’s [`paint`](/mapbox-gl-js/style-spec/layers/#line) properties.
topics:
  - Layers
thumbnail: geojson-line
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './geojson-line.html';"
---

{{ <Example html={html} {...this.props} /> }}
