---
title: Slowly fly to a location
description: Use flyTo with flyOptions to slowly zoom to a location.
topics:
  - Camera
thumbnail: flyto-options
contentType: example
hideFeedback: true
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './flyto-options.html';"
---

Use [`flyTo`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#flyto) with flyOptions to slowly zoom to a location.

{{ <Example html={html} {...this.props} /> }}
