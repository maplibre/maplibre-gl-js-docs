---
title: Display driving directions
description: >-
  Use the [mapbox-gl-directions](https://github.com/mapbox/mapbox-gl-directions)
  plugin to show results from the Mapbox Directions API. Click the map to add an
  origin and destination.
topics:
  - Controls and overlays
thumbnail: mapbox-gl-directions
contentType: example
layout: example
language:
- JavaScript
products:
- Directions API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-directions.html';"
---

{{ <Example html={html} {...this.props} /> }}
