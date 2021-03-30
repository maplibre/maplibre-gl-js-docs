---
title: Style ocean depth data
description: Use the interpolate expression with a cubic bezier curve expression to style bathymetry data.
topics:
  - Layers
thumbnail: style-ocean-depth-data
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './style-ocean-depth-data.html';"
---

Use the [`interpolate` expression](/mapbox-gl-js/style-spec/expressions/#interpolate) with a cubic bezier curve expression to style bathymetry data.

{{ <Example html={html} {...this.props} /> }}
