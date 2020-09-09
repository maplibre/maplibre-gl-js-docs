---
title: Use a fallback image
description: Use a [coalesce](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#coalesce) expression to display another image when a requested image is not available.
topics:
  - Layers
thumbnail: fallback-image
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './fallback-image.html';"
---

{{ <Example html={html} {...this.props} /> }}
