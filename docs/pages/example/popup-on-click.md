---
title: Display a popup on click
description: When a user clicks a symbol, show a popup containing more information.
topics:
  - Controls and overlays
thumbnail: popup-on-click
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './popup-on-click.html';"
---

When a user clicks a symbol, show a [`Popup`](/mapbox-gl-js/api/markers/#popup) containing more information. The symbols are from the [Maki](https://labs.mapbox.com/maki-icons/) symbol set used in the Mapbox Streets style.

{{ <Example html={html} {...this.props} /> }}
