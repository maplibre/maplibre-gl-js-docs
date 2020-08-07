---
title: Introduction
description: The Mapbox GL JS API documentation to render interactive maps from vector tiles and Mapbox styles.
contentType: API
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import OverviewHeader from '@mapbox/dr-ui/overview-header';"
- "import Quickstart from '../../components/quickstart';"
- "import Example from '../../components/example';"
- "import SimpleMapHtml from '../example/simple-map.html';"
- "import Copyable from '../../components/copyable';"
- "import urls from '../../components/urls';"
- "import {version} from '../../../mapbox-gl-js/package.json';"
---

{{
    <OverviewHeader
    features={[
        "Custom map styles",
        "Fast vector maps",
        "Compatible with other Mapbox tools"
    ]}
    title="Mapbox GL JS"
    version={version}
    changelogLink="https://github.com/mapbox/mapbox-gl-js/blob/main/CHANGELOG.md"
    ghLink="https://github.com/mapbox/mapbox-gl-js"
    installLink="https://www.mapbox.com/install/js/"
    image={<div />}
    />
}}

Mapbox GL JS is a JavaScript library that uses WebGL to render interactive maps from [vector tiles](https://docs.mapbox.com/help/glossary/vector-tiles/) and [Mapbox styles](/mapbox-gl-js/style-spec/). It is part of the Mapbox GL ecosystem, which includes [Mapbox Mobile](https://www.mapbox.com/mobile/), a compatible renderer written in C++ with bindings for desktop and mobile platforms.


## Quickstart

{{
    <Example
        frontMatter={{
          title: 'Mapbox GL JS map',
          description: ''
        }}
        location={this.props.location}
        html={SimpleMapHtml}
        displaySnippet={false}
        height={300}
    />
}}

To get started, you need an [access token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/) and a [style URL](https://docs.mapbox.com/help/glossary/style-url/). You can choose from one of our [professionally designed styles](https://docs.mapbox.com/api/maps/#styles) or create your own using [Mapbox Studio](https://studio.mapbox.com/).

{{
<Quickstart />
}}


## Reading this documentation

This documentation is divided into several sections:

* [**Map**](/mapbox-gl-js/api/map/). The `Map` object is the map on your page. It lets you access methods and properties for interacting with the map's style and layers, respond to events, and manipulate the user's perspective with the camera.
* [**Properties and options**](/mapbox-gl-js/api/properties/). This section describes Mapbox GL JS's global properties and options that you might want to access while initializing your map or accessing information about its status.
* [**Markers and controls**](/mapbox-gl-js/api/markers/). This section describes the user interface elements that you can add to your map. The items in this section exist outside of the map's `canvas` element.
* [**Geography and geometry**](/mapbox-gl-js/api/geography/). This section includes general utilities and types that relate to working with and manipulating geographic information or geometries.
* [**User interaction handlers**](/mapbox-gl-js/api/handlers/). The items in this section relate to the ways in which the map responds to user input.
* [**Sources**](/mapbox-gl-js/api/sources/). This section describes the source types Mapbox GL JS can handle besides the ones described in the [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/).
* [**Events**](/mapbox-gl-js/api/events/). This section describes the different types of events that Mapbox GL JS can raise.

Each section describes classes or objects as well as their **properties**, **parameters**, **instance members**, and associated **events**. Many sections also include inline code examples and related resources.


## CSP Directives

As a mitigation for Cross-Site Scripting and other types of web security vulnerabilities, you may use a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/Security/CSP) to specify security policies for your website. If you do, Mapbox GL JS requires the following CSP directives:

```
worker-src blob: ;
child-src blob: ;
img-src data: blob: ;
```

Requesting styles from Mapbox or other services will require additional directives. For Mapbox, you can use this `connect-src` directive:

```
connect-src https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com
```

For strict CSP environments without `worker-src blob: ; child-src blob:` enabled, there's a separate Mapbox GL JS bundle (`mapbox-gl-csp.js` and `mapbox-gl-csp-worker.js`) which requires setting the path to the worker manually:

{{
<Copyable lang="html">{`<script src='${urls.js().replace('.js', '-csp.js')}'></script>
<script>
mapboxgl.workerUrl = "${urls.js().replace('.js', '-csp-worker.js')}";
...
</script>`}</Copyable>
}}

If you use the `sandbox` directive, and your [access token is restricted to certain URLs](https://docs.mapbox.com/accounts/overview/tokens/#url-restrictions), the `allow-same-origin` value is required. This allows requests to have a `Referer` header that is not `null`. See the section on [Referrer Policies](https://docs.mapbox.com/mapbox-gl-js/overview/#referrer-policies) for further information.

## Referrer Policies

If you use a [URL-restricted access token](https://docs.mapbox.com/accounts/overview/tokens/#url-restrictions), you have to make sure that the browser sends the correct referrer header. This is the default setting. But if you use the [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) header on your website, pick a value that still sends a `Referer` header, like `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, or `strict-origin`. Specifically, `same-origin` and `no-referrer` will never send a referrer header, and thus Mapbox API calls won't work.

If you limit the referrer to the origin, make sure that the URL you restrict your access token to doesn't contain path information, because the `Origin` header doesn't contain a path by definition.

## Mapbox CSS

The CSS referenced in the Quickstart is used to style DOM elements created by Mapbox code. Without the CSS, elements like Popups and Markers won't work.

Including it with a `<link>` in the head of the document via the Mapbox CDN is the simplest and easiest way to provide the CSS, but it is also bundled in the Mapbox module, meaning that if you have a bundler that can handle CSS, you can import the CSS from `mapbox-gl/dist/mapbox-gl.css`.

Note too that if the CSS isn't available by the first render, as soon as the CSS is provided, the DOM elements that depend on this CSS should recover.
