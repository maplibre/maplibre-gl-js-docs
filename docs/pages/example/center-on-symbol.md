---
title: Center the map on a clicked symbol
description: Use events and flyTo to center the map on a symbol.
topics:
  - Camera
  - User interaction
thumbnail: center-on-symbol
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './center-on-symbol.html';"
---

Use events and [`flyTo`](/mapbox-gl-js/api/map/#map#flyto) to center the map on a [`symbol`](/mapbox-gl-js/style-spec/layers/#symbol).

{{ <Example html={html} {...this.props} /> }}
