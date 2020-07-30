---
title: Use a custom render function with a geocoder
description: >-
  Use a custom html rendering function with the [mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder)
  to customize how the dropdown menu is displayed.
tags:
  - geocoder
thumbnail: mapbox-gl-geocoder-custom-render
contentType: example
language:
- JavaScript
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-geocoder-custom-render.html';"
---

{{ <Example html={html} {...this.props} /> }}
