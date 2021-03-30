---
title: Update a choropleth layer by zoom level
description: Display state or county population depending on zoom level.
topics:
  - Layers
  - User interaction
thumbnail: updating-choropleth
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './updating-choropleth.html';"
---

Use 2014 census data to display state or county population depending on zoom level.

{{ <Example html={html} {...this.props} /> }}
