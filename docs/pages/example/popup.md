---
title: Display a popup
description: Add a popup to the map.
topics:
  - Controls and overlays
thumbnail: popup
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './popup.html';"
---

Add a [`Popup`](https://maplibre.org/maplibre-gl-js-docs/api/markers/#popup) to the map.

{{ <Example html={html} {...this.props} /> }}
