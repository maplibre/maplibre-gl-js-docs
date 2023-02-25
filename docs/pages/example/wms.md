---
title: Add a WMS source
description: Add an external Web Map Service raster layer to the map using addSource's tiles option.
topics:
  - Sources
thumbnail: wms
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './wms.html';"
---

Add an external [Web Map Service raster layer](https://www.ogc.org/standards/wms) to the map using [`addSource`](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addsource)'s [`tiles`](https://maplibre.org/maplibre-gl-style-spec/sources/#raster-tiles) option.

{{ <Example html={html} {...this.props} /> }}
