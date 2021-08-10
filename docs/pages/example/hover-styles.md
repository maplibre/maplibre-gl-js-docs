---
title: Create a hover effect
description: Use events and feature states to create a per feature hover effect.
topics:
  - User interaction
thumbnail: hover-styles
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './hover-styles.html';"
---

Use events and [feature states](https://maplibre.org/maplibre-gl-js-docs/api/#map#setfeaturestate) to create a per feature hover effect.

{{ <Example html={html} {...this.props} /> }}
