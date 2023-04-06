---
title: Variable label placement
description: Use text-variable-anchor to allow high priority labels to shift position to stay on the map.
topics:
  - Layers
thumbnail: variable-label-placement
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './variable-label-placement.html';"
---

Use [`text-variable-anchor`](https://maplibre.org/maplibre-style/layers/#layout-symbol-text-variable-anchor) to allow high priority labels to shift position to stay on the map.

{{ <Example html={html} {...this.props} /> }}
