---
title: Style Specification
description: 'This specification defines and describes the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it.'
contentType: specification
navOrder: 4
order: 1
layout: page
hideFeedback: true
products:
- Mapbox Style Specification
overviewHeader:
  title: Style Specification
  features: []
  ghLink: https://github.com/maplibre/maplibre-gl-js/tree/main/src/style-spec
  changelogLink: https://github.com/maplibre/maplibre-gl-js/blob/main/src/style-spec/CHANGELOG.md
---

A Mapbox [style](https://docs.mapbox.com/help/glossary/style/) is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a [JSON](http://www.json.org/) object with specific root level and nested properties. This specification defines and describes these properties.

The intended audience of this specification includes:

- Advanced designers and cartographers who want to write styles by hand rather than use [Mapbox Studio](https://studio.mapbox.com).
- Developers using style-related features of [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) or the [Mapbox Maps SDK for Android](https://docs.mapbox.com/android/).
- Authors of software that generates or processes Mapbox styles.

For platform-appropriate documentation of style-related features, developers using the Mapbox Maps SDK for iOS should consult the [iOS SDK API reference](https://docs.mapbox.com/ios/maps/overview/), and developers using the Mapbox Maps SDK for macOS should consult the [macOS SDK API reference](https://mapbox.github.io/mapbox-gl-native/macos/).

## Style document structure

A Mapbox style consists of a set of [root properties](/maplibre-gl-js-docs/style-spec/root), some of which describe a single global property, and some of which contain nested properties. Some root properties, like [`version`](/maplibre-gl-js-docs/style-spec/root/#version), [`name`](/maplibre-gl-js-docs/style-spec/root/#name), and [`metadata`](/maplibre-gl-js-docs/style-spec/root/#metadata), don't have any influence over the appearance or behavior of your map, but provide important descriptive information related to your map. Others, like [`layers`](/maplibre-gl-js-docs/style-spec/layers) and [`sources`](/maplibre-gl-js-docs/style-spec/sources), are critical and determine which map features will appear on your map and what they will look like. Some properties, like [`center`](/maplibre-gl-js-docs/style-spec/root/#center), [`zoom`](/maplibre-gl-js-docs/style-spec/root/#zoom), [`pitch`](/maplibre-gl-js-docs/style-spec/root/#pitch), and [`bearing`](/maplibre-gl-js-docs/style-spec/root/#bearing), provide the map renderer with a set of defaults to be used when initially displaying the map.
