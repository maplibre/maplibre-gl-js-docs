---
title: Style Specification
description: 'This specification defines and describes the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it.'
contentType: specification
navOrder: 4
order: 1
layout: accordion
products:
- Mapbox Style Specification
---

A Mapbox style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a [JSON](http://www.json.org/) object with specific root level and nested properties. This specification defines and describes these properties.

The intended audience of this specification includes:

- Advanced designers and cartographers who want to write styles by hand rather than use [Mapbox Studio](https://studio.mapbox.com).
- Developers using style-related features of [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) or the [Mapbox Maps SDK for Android](https://docs.mapbox.com/android/).
- Authors of software that generates or processes Mapbox styles.

For platform-appropriate documentation of style-related features, developers using the Mapbox Maps SDK for iOS should consult the [iOS SDK API reference](https://docs.mapbox.com/ios/maps/overview/), and developers using the Mapbox Maps SDK for macOS should consult the [macOS SDK API reference](https://mapbox.github.io/mapbox-gl-native/macos/).

## Style document structure

A Mapbox style consists of a set of [root properties](/mapbox-gl-js/style-spec/root), some of which describe a single global property, and some of which contain nested properties. Some root properties, like [`version`](/mapbox-gl-js/style-spec/root/#version), [`name`](/mapbox-gl-js/style-spec/root/#name), and [`metadata`](/mapbox-gl-js/style-spec/root/#metadata), don't have any influence over the appearance or behavior of your map, but provide important descriptive information related to your map. Others, like [`layers`](/mapbox-gl-js/style-spec/layers) and [`sources`](/mapbox-gl-js/style-spec/sources), are critical and determine which map features will appear on your map and what they will look like. Some properties, like [`center`](/mapbox-gl-js/style-spec/root/#center), [`zoom`](/mapbox-gl-js/style-spec/root/#zoom), [`pitch`](/mapbox-gl-js/style-spec/root/#pitch), and [`bearing`](/mapbox-gl-js/style-spec/root/#bearing), provide the map renderer with a set of defaults to be used when initially displaying the map.
