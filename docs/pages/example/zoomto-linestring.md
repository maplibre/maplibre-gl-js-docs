---
title: Fit to the bounds of a LineString
description: Get the bounds of a LineString.
topics:
  - User interaction
thumbnail: zoomto-linestring
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './zoomto-linestring.html';"
---

Get the bounds of a LineString by passing its first coordinates to [`LngLatBounds`](/mapbox-gl-js/api/geography/#lnglatbounds) and chaining [`extend`](/mapbox-gl-js/api/geography/#lnglatbounds#extend) to include the last coordinates.

{{ <Example html={html} {...this.props} /> }}
