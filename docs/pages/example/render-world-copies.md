---
title: Render world copies
description: Toggle between rendering a single world and multiple copies of the world using [`setRenderWorldCopies`](/maplibre-gl-js/api/map/#map#setrenderworldcopies). If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude.
topics:
  - Styles
thumbnail: render-world-copies
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './render-world-copies.html';"
---

{{ <Example html={html} {...this.props} /> }}
