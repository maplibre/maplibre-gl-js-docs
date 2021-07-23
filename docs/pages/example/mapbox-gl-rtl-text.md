---
title: Add support for right-to-left scripts
description: Use the mapbox-gl-rtl-text plugin to support right-to-left languages such as Arabic and Hebrew.
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

Use the [mapbox-gl-rtl-text](https://github.com/mapbox/mapbox-gl-rtl-text) plugin to support right-to-left languages such as Arabic and Hebrew.

By setting the `lazy` parameter to `true`, the plugin is only loaded when the map first encounters Hebrew or Arabic text.

{{ <Example html={html} {...this.props} /> }}
