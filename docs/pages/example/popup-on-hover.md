---
title: Display a popup on hover
description: When a user hovers over a custom marker, show a popup containing more information.
topics:
  - Controls and overlays
thumbnail: popup-on-hover
contentType: example
hideFeedback: true
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './popup-on-hover.html';"
---

When a user hovers over a custom marker, show a [`Popup`](https://maplibre.org/maplibre-gl-js-docs/api/markers/#popup) containing more information.

{{ <Example html={html} {...this.props} /> }}
