---
title: Add a marker using a place name
description: Add a marker using a place name or address for its location using the forward geocoder.
topics:
  - Controls and overlays
thumbnail: marker-from-geocode
contentType: example
layout: example
language:
- JavaScript
products:
- Geocoding API
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './marker-from-geocode.html';"
---

Add a [`Marker`](/mapbox-gl-js/api/markers/#marker) using a place name or address for its location using the [forward geocoder](/api/search/geocoding/).

{{ <Example html={html} {...this.props} /> }}
