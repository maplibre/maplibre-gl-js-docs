---
title: Select features around a clicked point
description: Click on the map to query features using queryRenderedFeatures.
topics:
  - User interaction
thumbnail: queryrenderedfeatures-around-point
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './queryrenderedfeatures-around-point.html';"
---

Click on the map to query features using [`queryRenderedFeatures`](/mapbox-gl-js/api/map/#map#queryrenderedfeatures).

{{ <Example html={html} {...this.props} /> }}
