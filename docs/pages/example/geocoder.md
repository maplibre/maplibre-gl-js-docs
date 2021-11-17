---
title: Geocode with Nominatim
description: Geocode with Nominatim and the maplibre-gl-geocoder plugin.
topics:
  - Geocoder
thumbnail: geocoder
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './geocoder.html';"
---

Geocode (turn addresses into locations) with [Nominatim](https://nominatim.org/) and the [maplibre-gl-geocoder](https://github.com/maplibre/maplibre-gl-geocoder) plugin.

{{ <Example html={html} {...this.props} /> }}
