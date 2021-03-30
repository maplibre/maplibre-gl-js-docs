---
title: Check if Mapbox GL JS is supported
description: Check for Mapbox GL browser support.
topics:
  - Browser support
thumbnail: check-for-support
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './check-for-support.html';"
---

Use [`supported`](/mapbox-gl-js/api/properties/#supported) to check for Mapbox GL browser support, and show an alert if the browser does not support Mapbox GL. Find more information about browser support for Mapbox tools in the [Browser support](https://docs.mapbox.com/help/troubleshooting/mapbox-browser-support/) troubleshooting guide.

{{ <Example html={html} {...this.props} /> }}
