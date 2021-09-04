---
title: Style lines with a data-driven property
description: Create a visualization with a data expression for line-color.
topics:
  - Layers
thumbnail: data-driven-lines
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './data-driven-lines.html';"
---

Create a visualization with a data expression for [`line-color`](https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#paint-line-line-color).

{{ <Example html={html} {...this.props} /> }}
