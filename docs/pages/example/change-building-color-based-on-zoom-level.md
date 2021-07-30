---
title: Change building color based on zoom level
description: Use the interpolate expression to ease-in the building layer and smoothly fade from one color to the next.
topics:
  - Layers
thumbnail: change-building-color-based-on-zoom-level
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
- "import html from './change-building-color-based-on-zoom-level.html';"
---

Use the [`interpolate` expression](https://maplibre.org/maplibre-gl-js-docs/style-spec/expressions/#interpolate) to ease-in the building layer and smoothly fade from one color to the next.

{{ <Example html={html} {...this.props} /> }}
