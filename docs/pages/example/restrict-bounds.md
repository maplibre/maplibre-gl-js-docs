---
title: Restrict map panning to an area
description: Prevent a map from being panned to a different place by setting maxBounds.
topics:
  - User interaction
thumbnail: restrict-bounds
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
- "import html from './restrict-bounds.html';"
---

Prevent a map from being panned to a different place by setting [`maxBounds`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#setmaxbounds).

{{ <Example html={html} {...this.props} /> }}
