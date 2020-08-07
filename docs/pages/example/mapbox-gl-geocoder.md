---
title: Add a geocoder
description: >-
  Use the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder)
  control to search for places using Mapbox Geocoding API.
  Check out our [Search Playground](https://www.mapbox.com/search-playground/) to explore geocoding query parameters and how they affect the results.
tags:
  - controls-and-overlays
  - geocoder
thumbnail: mapbox-gl-geocoder
contentType: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder.html';"
---

{{ <Example html={html} {...this.props} /> }}
