---
title: Restrict map panning to an area
description: Prevent a map from being panned to a different place by setting maxBounds.
topics:
  - User interaction
thumbnail: restrict-bounds
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './restrict-bounds.html';"
---

Prevent a map from being panned to a different place by setting [`maxBounds`](/mapbox-gl-js/api/map/#map#setmaxbounds).

{{ <Example html={html} {...this.props} /> }}
