---
title: Offset the vanishing point using padding
description: Offset the center or vanishing point of the map to reduce distortion when floating elements are displayed over the map.
topics:
  - Camera
thumbnail: offset-vanishing-point-with-padding
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './offset-vanishing-point-with-padding.html';"
---

Offset the center or [vanishing point](https://en.wikipedia.org/wiki/Vanishing_point) of the map to reduce distortion when floating elements are displayed over the map.

{{ <Example html={html} {...this.props} /> }}
