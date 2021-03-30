---
title: Change worldview of administrative boundaries
description: Use the worldview value to adjust administrative boundaries based on the map's audience.
topics:
  - Layers
  - User interaction
thumbnail: toggle-worldviews
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
- Mapbox Streets tileset
prependJs:
- "import Example from '../../components/example';"
- "import html from './toggle-worldviews.html';"
---

Use the `worldview` value to adjust administrative boundaries based on the map's audience. Read more about [worldviews](https://docs.mapbox.com/help/glossary/worldview/).

{{ <Example html={html} {...this.props} /> }}
