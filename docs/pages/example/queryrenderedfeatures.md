---
title: Get features under the mouse pointer
description: Use queryRenderedFeatures to show properties of hovered-over map elements.
topics:
  - User interaction
thumbnail: queryrenderedfeatures
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './queryrenderedfeatures.html';"
---

Use [`queryRenderedFeatures`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#queryrenderedfeatures) to show properties of hovered-over map elements.

{{ <Example html={html} {...this.props} /> }}
