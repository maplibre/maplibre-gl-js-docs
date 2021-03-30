---
title: Add a geocoder
description: Use the mapbox-gl-geocoder control to search for places using the Mapbox Geocoding API.
topics:
  - Controls and overlays
  - Geocoder
thumbnail: mapbox-gl-geocoder
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder.html';"
---

Use the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control to search for places using the [Mapbox Geocoding API](/api/search/#geocoding). Use the [Search Playground](https://www.mapbox.com/search-playground/) to explore geocoding query parameters and how they affect the results.

{{ <Example html={html} {...this.props} /> }}
