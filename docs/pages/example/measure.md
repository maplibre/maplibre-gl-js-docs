---
title: Measure distances
description: Click points on a map to create lines that measure distanced using turf.length.
topics:
  - User interaction
thumbnail: measure
contentType: example
hideFeedback: true
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './measure.html';"
---

Click points on a map to create lines that measure distanced using [turf.length](https://turfjs.org/docs/#length).

{{ <Example html={html} {...this.props} /> }}
