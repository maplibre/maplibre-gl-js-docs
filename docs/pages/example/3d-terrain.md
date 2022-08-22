---
title: 3D Terrain
description: Go beyond hillshade and show elevation in actual 3D.
topics:
  - Layers
thumbnail: 3d-terrain
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './3d-terrain.html';"
---

Use 3D terrain to show mountains and valleys.

{{ <Example html={html} {...this.props} /> }}
