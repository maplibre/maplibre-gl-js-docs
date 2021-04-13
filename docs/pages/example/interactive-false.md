---
title: Display a non-interactive map
description: Disable interactivity to create a static map.
topics:
  - User interaction
thumbnail: interactive-false
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './interactive-false.html';"
---

Set `interactive: false` to create a static map.

{{ <Example html={html} {...this.props} /> }}
