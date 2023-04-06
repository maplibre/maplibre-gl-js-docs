---
title: Create a gradient line using an expression
description: Use the line-gradient paint property and an expression to visualize distance from the starting point of a line.
topics:
  - Layers
thumbnail: line-gradient
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './line-gradient.html';"
---

Use the [`line-gradient`](https://maplibre.org/maplibre-style/layers/#paint-line-line-gradient) paint property and an expression to visualize distance from the starting point of a line.

{{ <Example html={html} {...this.props} /> }}
