---
title: Create a heatmap layer
description: Visualize earthquake frequency by location using a heatmap layer.
topics:
  - Layers
thumbnail: heatmap-layer
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './heatmap-layer.html';"
---

Visualize earthquake frequency by location using a [heatmap layer](https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#heatmap).

{{ <Example html={html} {...this.props} /> }}
