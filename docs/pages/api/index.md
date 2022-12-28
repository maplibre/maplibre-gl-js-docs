---
title: API Reference
description: The MapLibre GL JS API documentation to render interactive maps from vector tiles and MapLibre styles.
contentType: API
navOrder: 1
order: 1
layout: page
hideFeedback: true
language:
- JavaScript
products:
- MapLibre GL JS
prependJs:
- "import Quickstart from '../../components/quickstart';"
- "import Example from '../../components/example';"
- "import SimpleMapHtml from '../example/simple-map.html';"
- "import Copyable from '../../components/copyable';"
- "import urls from '../../components/urls';"
overviewHeader:
  title: MapLibre GL JS
  features:
    - "Custom map styles"
    - "Fast vector maps"
    - "Compatible with other MapLibre tools"
  changelogLink: "https://github.com/maplibre/maplibre-gl-js/blob/main/CHANGELOG.md"
  ghLink: "https://github.com/maplibre/maplibre-gl-js"
  image: simple-map
  # version="" version is set dynamically in page-shell.js
---

MapLibre GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and [MapLibre styles](https://maplibre.org/maplibre-gl-js-docs/style-spec/). It is part of the [MapLibre GL ecosystem](https://github.com/maplibre).

## Quickstart

{{
<Example
frontMatter={{
title: 'MapLibre GL JS map',
description: ''
}}
location={this.props.location}
html={SimpleMapHtml}
displaySnippet={false}
height={300}
/>
}}

{{
`<Quickstart />`
}}

## Reading this documentation

This documentation is divided into several sections:

* [**Map**](https://maplibre.org/maplibre-gl-js-docs/api/map/). The `Map` object is the map on your page. It lets you access methods and properties for interacting with the map's style and layers, respond to events, and manipulate the user's perspective with the camera.
* [**Properties and options**](https://maplibre.org/maplibre-gl-js-docs/api/properties/). This section describes MapLibre GL JS's global properties and options that you might want to access while initializing your map or accessing information about its status.
* [**Markers and controls**](https://maplibre.org/maplibre-gl-js-docs/api/markers/). This section describes the user interface elements that you can add to your map. The items in this section exist outside of the map's `canvas` element.
* [**Geography and geometry**](https://maplibre.org/maplibre-gl-js-docs/api/geography/). This section includes general utilities and types that relate to working with and manipulating geographic information or geometries.
* [**User interaction handlers**](https://maplibre.org/maplibre-gl-js-docs/api/handlers/). The items in this section relate to the ways in which the map responds to user input.
* [**Sources**](https://maplibre.org/maplibre-gl-js-docs/api/sources/). This section describes the source types MapLibre GL JS can handle besides the ones described in the [MapLibre Style Specification](https://maplibre.org/maplibre-gl-js-docs/style-spec/).
* [**Events**](https://maplibre.org/maplibre-gl-js-docs/api/events/). This section describes the different types of events that MapLibre GL JS can raise.

Each section describes classes or objects as well as their **properties**, **parameters**, **instance members**, and associated **events**. Many sections also include inline code examples and related resources.

In the examples, we use vector tiles from [MapTiler](https://maptiler.com). Get your own API key if you want to use MapTiler data in your project.

## CSP Directives

As a mitigation for Cross-Site Scripting and other types of web security vulnerabilities, you may use a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/Security/CSP) to specify security policies for your website. If you do, MapLibre GL JS requires the following CSP directives:

```
worker-src blob: ;
child-src blob: ;
img-src data: blob: ;
```

Requesting styles from Mapbox or other services will require additional directives. For Mapbox, you can use this `connect-src` directive:

```
connect-src https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com
```

For strict CSP environments without `worker-src blob: ; child-src blob:` enabled, there's a separate MapLibre GL JS bundle (`mapbox-gl-csp.js` and `mapbox-gl-csp-worker.js`) which requires setting the path to the worker manually:

{{
`<Copyable lang="html">`{`<script src='${urls.js().replace('.js', '-csp.js')}'>`</script>`

<script>
maplibregl.workerUrl = "${urls.js().replace('.js', '-csp-worker.js')}";
...
</script>`}</Copyable>

}}

If you use the `sandbox` directive, and your [access token is restricted to certain URLs](https://docs.mapbox.com/accounts/overview/tokens/#url-restrictions), the `allow-same-origin` value is required. This allows requests to have a `Referer` header that is not `null`. See the section on [Referrer Policies](https://maplibre.org/maplibre-gl-js-docs/overview/#referrer-policies) for further information.

## Referrer Policies

If you use a [URL-restricted access token](https://docs.mapbox.com/accounts/overview/tokens/#url-restrictions), you have to make sure that the browser sends the correct referrer header. This is the default setting. But if you use the [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) header on your website, pick a value that still sends a `Referer` header, like `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, or `strict-origin`. Specifically, `same-origin` and `no-referrer` will never send a referrer header, and thus Mapbox API calls won't work.

If you limit the referrer to the origin, make sure that the URL you restrict your access token to doesn't contain path information, because the `Origin` header doesn't contain a path by definition.

## MapLibre CSS

The CSS referenced in the Quickstart is used to style DOM elements created by MapLibre code. Without the CSS, elements like Popups and Markers won't work.

Including it with a `<link>` in the head of the document via the UNPKG CDN is the simplest and easiest way to provide the CSS, but it is also bundled in the MapLibre module, meaning that if you have a bundler that can handle CSS, you can import the CSS from `maplibre-gl/dist/maplibre-gl.css`.

Note too that if the CSS isn't available by the first render, as soon as the CSS is provided, the DOM elements that depend on this CSS should recover.

## Dependencies

The dependencies for MapLibre GL JS (`.js` & `.css`) are distributed via [UNPKG.com](https://unpkg.com).  UNPKG can distribute a fixed version, a [semver range](https://semver.org/), a tag, or omit the version/tag entirely to use the `latest` tag.

You can view a listing of all the files in the MapLibre GL JS package by appending a `/` at the end of the MapLibre slug.  This is useful to review other revisions or older `CHANGELOG`s.

* [https://unpkg.com/maplibre-gl/](https://unpkg.com/maplibre-gl/)

*Examples*

| Use Case                                                                     |                                                      `.js`                                                      |                                                      `.css`                                                      |
| :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
| `latest`                                                                   |        [https://unpkg.com/maplibre-gl/dist/maplibre-gl.js](https://unpkg.com/maplibre-gl/dist/maplibre-gl.js)        |        [https://unpkg.com/maplibre-gl/dist/maplibre-gl.css](https://unpkg.com/maplibre-gl/dist/maplibre-gl.css)        |
| Use a fixed version `1.14.0`                                               | [https://unpkg.com/maplibre-gl@1.14.0/dist/maplibre-gl.js](https://unpkg.com/maplibre-gl@1.14.0/dist/maplibre-gl.js) | [https://unpkg.com/maplibre-gl@1.14.0/dist/maplibre-gl.css](https://unpkg.com/maplibre-gl@1.14.0/dist/maplibre-gl.css) |
| Use at least `1.14.x`                                                      |  [https://unpkg.com/maplibre-gl@^1.14/dist/maplibre-gl.js](https://unpkg.com/maplibre-gl@^1.14/dist/maplibre-gl.js)  |  [https://unpkg.com/maplibre-gl@^1.14/dist/maplibre-gl.css](https://unpkg.com/maplibre-gl@^1.14/dist/maplibre-gl.css)  |
| Return metadata as JSON on `latest` to review `lastModified` & `size`. |   [https://unpkg.com/maplibre-gl/dist/maplibre-gl.js?meta](https://unpkg.com/maplibre-gl/dist/maplibre-gl.js?meta)   |   [https://unpkg.com/maplibre-gl/dist/maplibre-gl.css?meta](https://unpkg.com/maplibre-gl/dist/maplibre-gl.css?meta)   |
| `CHANGELOG.md` for `latest`                                              |        [https://unpkg.com/browse/maplibre-gl/CHANGELOG.md](https://unpkg.com/browse/maplibre-gl/CHANGELOG.md)        |                                                                                                                    |
| `LICENSE.txt` for `latest`                                               |         [https://unpkg.com/browse/maplibre-gl/LICENSE.txt](https://unpkg.com/browse/maplibre-gl/LICENSE.txt)         |                                                                                                                    |

