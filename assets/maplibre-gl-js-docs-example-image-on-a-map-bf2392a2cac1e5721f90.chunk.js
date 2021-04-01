(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"+1cP":function(t,e,n){"use strict";n.r(e),e.default="<div id=\"map\"></div>\n<script>\n    var mapStyle = {\n        'version': 8,\n        'name': 'Dark',\n        'sources': {\n            'mapbox': {\n                'type': 'vector',\n                'url': 'mapbox://mapbox.mapbox-streets-v8'\n            },\n            'overlay': {\n                'type': 'image',\n                'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',\n                'coordinates': [\n                    [-80.425, 46.437],\n                    [-71.516, 46.437],\n                    [-71.516, 37.936],\n                    [-80.425, 37.936]\n                ]\n            }\n        },\n        'sprite': 'mapbox://sprites/mapbox/dark-v10',\n        'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',\n        'layers': [\n            {\n                'id': 'background',\n                'type': 'background',\n                'paint': { 'background-color': '#111' }\n            },\n            {\n                'id': 'water',\n                'source': 'mapbox',\n                'source-layer': 'water',\n                'type': 'fill',\n                'paint': { 'fill-color': '#2c2c2c' }\n            },\n            {\n                'id': 'boundaries',\n                'source': 'mapbox',\n                'source-layer': 'admin',\n                'type': 'line',\n                'paint': {\n                    'line-color': '#797979',\n                    'line-dasharray': [2, 2, 6, 2]\n                },\n                'filter': ['all', ['==', 'maritime', 0]]\n            },\n            {\n                'id': 'overlay',\n                'source': 'overlay',\n                'type': 'raster',\n                'paint': { 'raster-opacity': 0.85 }\n            },\n            {\n                'id': 'cities',\n                'source': 'mapbox',\n                'source-layer': 'place_label',\n                'type': 'symbol',\n                'layout': {\n                    'text-field': '{name_en}',\n                    'text-font': ['DIN Offc Pro Bold', 'Arial Unicode MS Bold'],\n                    'text-size': [\n                        'interpolate',\n                        ['linear'],\n                        ['zoom'],\n                        4,\n                        9,\n                        6,\n                        12\n                    ]\n                },\n                'paint': {\n                    'text-color': '#969696',\n                    'text-halo-width': 2,\n                    'text-halo-color': 'rgba(0, 0, 0, 0.85)'\n                }\n            },\n            {\n                'id': 'states',\n                'source': 'mapbox',\n                'source-layer': 'place_label',\n                'type': 'symbol',\n                'layout': {\n                    'text-transform': 'uppercase',\n                    'text-field': '{name_en}',\n                    'text-font': ['DIN Offc Pro Bold', 'Arial Unicode MS Bold'],\n                    'text-letter-spacing': 0.15,\n                    'text-max-width': 7,\n                    'text-size': [\n                        'interpolate',\n                        ['linear'],\n                        ['zoom'],\n                        4,\n                        10,\n                        6,\n                        14\n                    ]\n                },\n                'filter': ['==', ['get', 'class'], 'state'],\n                'paint': {\n                    'text-color': '#969696',\n                    'text-halo-width': 2,\n                    'text-halo-color': 'rgba(0, 0, 0, 0.85)'\n                }\n            }\n        ]\n    };\n\n    var map = new mapboxgl.Map({\n        container: 'map',\n        maxZoom: 5.99,\n        minZoom: 4,\n        zoom: 5,\n        center: [-75.789, 41.874],\n        style: mapStyle\n    });\n<\/script>\n"},M4Oy:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;e.default=o},RWW5:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),c=s(n("+1cP")),i=s(n("1wO5"));function s(t){return t&&t.__esModule?t:{default:t}}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b={title:"Add an image",description:"Add a radar weather image overlay on top of a dark vector baselayer.",topics:["Sources","Layers"],thumbnail:"image-on-a-map",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],headings:[]},h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(d,t);var e,n,r,s=m(d);function d(){return l(this,d),s.apply(this,arguments)}return e=d,(n=[{key:"render",value:function(){var t=this.props;return o.default.createElement(i.default,p({},t,{frontMatter:b}),o.default.createElement("div",null,o.default.createElement("p",null,"Add a radar weather image overlay on top of a dark vector baselayer."),o.default.createElement(a.default,p({html:c.default},this.props))))}}])&&u(e.prototype,n),r&&u(e,r),d}(o.default.PureComponent);e.default=h},UZA0:function(t,e,n){var r=n("RWW5");r=r.default||r,t.exports={component:r,props:{frontMatter:{title:"Add an image",description:"Add a radar weather image overlay on top of a dark vector baselayer.",topics:["Sources","Layers"],thumbnail:"image-on-a-map",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],prependJs:["import Example from '../../components/example';","import html from './image-on-a-map.html';"]}}}},mOgX:function(t,e,n){"use strict";n.r(e);var r=n("f4rJ");n("yr+R");function o(t,e){return e&&e.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(t)}e.default={js:function(t){return o("js",t)},css:function(t){return o("css",t)}}},uLm5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),c=n("v8ZZ"),i=n.n(c),s=n("irdr"),p=n.n(s),l=n("M4Oy"),u=n.n(l),f=n("umIL"),m=n("wdKx");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x(t);if(e){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,r,c=v(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=c.call(this,t)).state={token:void 0,unsupported:!1},e}return e=s,(n=[{key:"addToken",value:function(t){var e=this.state.token?"":"\n\t// TO MAKE THE MAP APPEAR YOU MUST\n\t// ADD YOUR ACCESS TOKEN FROM\n\t// https://account.mapbox.com";return t.replace("<script>","<script>".concat(e,"\n\tmapboxgl.accessToken = '").concat(this.state.token||"<your access token here>","';"))}},{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(this.addToken(t),"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n<script>mapboxgl.accessToken = '").concat(MapboxPageShell.getMapboxAccessToken(),"'<\/script>\n</head>\n<body>\n").concat(t,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,n=t.location,r=this.displayHTML(e),a=m.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(p.a,{code:this.displayHTML(e),highlighter:function(){return f.highlightHtml},edit:{frontMatter:b(b({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,n=e.frontMatter,r=e.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),i()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){var t=this;if(i()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close(),MapboxPageShell.afterUserCheck((function(){t.setState({token:MapboxPageShell.getUserPublicAccessToken()})}))}}}])&&h(e.prototype,n),r&&h(e,r),s}(o.a.Component);O(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,n){"use strict";function r(t){return!o(t)}function o(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{e=new Worker(r),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(r),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const t=document.createElement("canvas");t.width=t.height=1;const e=t.getContext("2d");if(!e)return!1;const n=e.getImageData(0,0,1,1);return n&&n.width===t.width}()?function(t){void 0===a[t]&&(a[t]=function(t){const e=function(t){var e=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,e.probablySupportsContext?e.probablySupportsContext("webgl",n)||e.probablySupportsContext("experimental-webgl",n):e.supportsContext?e.supportsContext("webgl",n)||e.supportsContext("experimental-webgl",n):e.getContext("webgl",n)||e.getContext("experimental-webgl",n)}(t);if(!e)return!1;const n=e.createShader(e.VERTEX_SHADER);if(!n||e.isContextLost())return!1;return e.shaderSource(n,"void main() {}"),e.compileShader(n),!0===e.getShaderParameter(n,e.COMPILE_STATUS)}(t));return a[t]}(t&&t.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.exports?t.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,c=/<style\b[^>]*>([\s\S]*?)<\/style>/g,i=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=t.match(c),p="".concat(t.replace(a,"")),l=t.match(a)[1];s&&(s.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),p="".concat(p.replace(c,"")));if(t.match(r)){var u=t.match(r).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(u),p="".concat(p.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(o)){var f=t.match(o).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),p="".concat(p.replace(/<link[\s\S]*?>/g,""))}p.match(i)&&(p=p.match(i)[1]);return{html:p,css:e,js:l,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-image-on-a-map-bf2392a2cac1e5721f90.chunk.js.map