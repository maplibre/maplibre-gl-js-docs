---
title: Add support for right-to-left scripts
description: >-
  Use the [mapbox-gl-rtl-text](https://github.com/mapbox/mapbox-gl-rtl-text)
  plugin to support the Arabic or
  Hebrew languages, which are written right-to-left.
  
  By setting the `lazy` parameter to `true`, the plugin is only loaded when the map first encounters Hebrew or Arabic text.
  
  Mapbox Studio loads this plugin by default.
topics:
  - Internationalization support
thumbnail: mapbox-gl-rtl-text
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './mapbox-gl-rtl-text.html';"
---

{{ <Example html={html} {...this.props} /> }}
