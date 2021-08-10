---
title: Check if MapLibre GL JS is supported
description: Check for MapLibre GL browser support.
topics:
  - Browser support
thumbnail: check-for-support
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './check-for-support.html';"
---

Use [`supported`](https://maplibre.org/maplibre-gl-js-docs/api/properties/#supported) to check for MapLibre GL browser support, and show an alert if the browser does not support MapLibre GL. Find more information about browser support for Mapbox tools in the [Browser support](https://docs.mapbox.com/help/troubleshooting/mapbox-browser-support/) troubleshooting guide.

{{ <Example html={html} {...this.props} /> }}
