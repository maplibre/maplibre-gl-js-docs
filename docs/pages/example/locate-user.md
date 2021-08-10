---
title: Locate the user
description: Geolocate the user and then track their current location on the map using the GeolocateControl.
topics:
  - Controls and overlays
thumbnail: locate-user
contentType: example
layout: example
hideFeedback: true # hide feedback from page
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './locate-user.html';"
---

Geolocate the user and then track their current location on the map using the [`GeolocateControl`](https://maplibre.org/maplibre-gl-js-docs/api/markers/#geolocatecontrol).

{{ <Example html={html} {...this.props} /> }}
