---
title: Add Contour Lines
description: Add contour lines to your map from a raster-dem source.
topics:
    - Layers
thumbnail: contour-lines
contentType: example
layout: example
hideFeedback: true
language:
    - JavaScript
products:
    - MapLibre GL JS
prependJs:
    - "import Example from '../../components/example';"
    - "import html from './contour-lines.html';"
---

Use the [maplibre-contour](https://github.com/onthegomap/maplibre-contour) plugin to render elevation contour lines on a map from a raster-dem source.

{{ <Example html={html} {...this.props} /> }}
