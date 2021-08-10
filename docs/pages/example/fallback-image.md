---
title: Use a fallback image
description: Use a coalesce expression to display another image when a requested image is not available.
topics:
  - Layers
thumbnail: fallback-image
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './fallback-image.html';"
---

Use a [`coalesce`](https://maplibre.org/maplibre-gl-js-docs/style-spec/expressions/#coalesce) expression to display another image when a requested image is not available.

{{ <Example html={html} {...this.props} /> }}
