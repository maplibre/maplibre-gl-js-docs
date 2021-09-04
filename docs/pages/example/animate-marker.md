---
title: Animate a marker
description: Animate the position of a marker by updating its location on each frame.
topics:
  - Controls and overlays
thumbnail: animate-marker
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './animate-marker.html';"
---

Animate the position of a [`Marker`](https://maplibre.org/maplibre-gl-js-docs/api/markers/#marker) by updating its location on each frame.

{{ <Example html={html} {...this.props} /> }}
