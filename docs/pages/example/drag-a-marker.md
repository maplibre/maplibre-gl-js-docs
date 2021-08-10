---
title: Create a draggable Marker
description: Drag the marker to a new location on a map and populate its coordinates in a display.
topics:
  - User interaction
thumbnail: drag-a-marker
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './drag-a-marker.html';"
---

Drag the [`Marker`](https://maplibre.org/maplibre-gl-js-docs/api/markers/#marker) to a new location on a map and populate its coordinates in a display.

{{ <Example html={html} {...this.props} /> }}
