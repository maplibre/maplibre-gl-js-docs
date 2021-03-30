---
title: Animate 3D buildings based on ambient sounds
description: Make a 3D map that responds to sounds from your environment.
topics:
  - User interaction
thumbnail: dancing-buildings
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './dancing-buildings.html';"
---

Connect the runtime styling API with the Web Audio API to create a map where the 3D buildings dance to the rhythm of your ambient environment.

{{ <Example html={html} {...this.props} /> }}
