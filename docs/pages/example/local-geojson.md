---
title: View local GeoJSON
description: View local GeoJSON without server upload.
topics:
  - Sources
thumbnail: local-geojson
contentType: example
layout: example
hideFeedback: true
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './local-geojson.html';"
---

Download [example GeoJSON here](https://data-roscoco.opendata.arcgis.com/datasets/0371f25602be4f5f9145e9b76e2de54b_0.geojson?outSR=%7B%22latestWkid%22%3A2157%2C%22wkid%22%3A2157%7D). Instead of uploading the file to a server and reading it from there, it is accessed locally by the browser without any network transfer. If you also want to write to the opened file, see [example with File System Access API](local-geojson-experimental.html).

{{ <Example html={html} {...this.props} /> }}
