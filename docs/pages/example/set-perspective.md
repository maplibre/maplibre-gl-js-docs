---
title: Set pitch and bearing
description: Initialize a map with pitch and bearing camera options.
topics:
  - Camera
thumbnail: set-perspective
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './set-perspective.html';"
---

Map options extend [`CameraOptions`](/mapbox-gl-js/api/#cameraoptions), so you can set more than the center and zoom. This example sets the pitch and bearing.

{{ <Example html={html} {...this.props} /> }}
