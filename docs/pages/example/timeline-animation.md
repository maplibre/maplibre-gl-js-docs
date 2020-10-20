---
title: Create a time slider
description: >-
  Using [`Map#setFilter`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setfilter) and [D3.js](https://d3js.org/), create a range slider to visualize earthquakes in 2015 that were greater than 5.9
  magnitude.
topics:
  - User interaction
  - Sources
thumbnail: timeline-animation
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './timeline-animation.html';"
---

{{ <Example html={html} {...this.props} /> }}
