---
title: Supplement forward geocoding search results from another data source
description: Use the mapbox-gl-geocoder control to search for places using Mapbox Geocoding API.
topics:
  - Geocoder
thumbnail: forward-geocode-custom-data
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
- Geocoding API
prependJs:
- "import Example from '../../components/example';"
- "import html from './forward-geocode-custom-data.html';"
---

Use the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder) control to search for places using Mapbox Geocoding AP and supplement results from a local data source or function. This example matches Chicago Park names with text input.

{{ <Example html={html} {...this.props} /> }}
