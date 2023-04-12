---
title: Display and style rich text labels
description: Use the format expression to display country labels in both English and in the local language.
topics:
  - Layers
thumbnail: display-and-style-rich-text-labels
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './display-and-style-rich-text-labels.html';"
---

Use the [`format` expression](https://maplibre.org/maplibre-style-spec/expressions/#types-format) to display country labels in both English and in the local language.

{{ <Example html={html} {...this.props} /> }}
