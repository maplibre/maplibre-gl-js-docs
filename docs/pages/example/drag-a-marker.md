---
title: Create a draggable Marker
description: Drag the marker to a new location on a map and populate its coordinates in a display.
topics:
  - User interaction
thumbnail: drag-a-marker
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './drag-a-marker.html';"
---

Drag the [`Marker`](/mapbox-gl-js/api/markers/#marker) to a new location on a map and populate its coordinates in a display.

{{ <Example html={html} {...this.props} /> }}
