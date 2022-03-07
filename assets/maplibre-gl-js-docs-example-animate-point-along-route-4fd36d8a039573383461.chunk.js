(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"0dsY":function(t,e,n){"use strict";n.r(e),e.default="<style>\n    .overlay {\n        position: absolute;\n        top: 10px;\n        left: 10px;\n    }\n\n    .overlay button {\n        font: 600 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n        background-color: #3386c0;\n        color: #fff;\n        display: inline-block;\n        margin: 0;\n        padding: 10px 20px;\n        border: none;\n        cursor: pointer;\n        border-radius: 3px;\n    }\n\n    .overlay button:hover {\n        background-color: #4ea0da;\n    }\n</style>\n<script\n    src=\"https://api.tiles.mapbox.com/mapbox.js/plugins/turf/v2.0.0/turf.min.js\"\n    charset=\"utf-8\"\n><\/script>\n\n<div id=\"map\"></div>\n<div class=\"overlay\">\n    <button id=\"replay\">Replay</button>\n</div>\n\n<script>\n    var map = new maplibregl.Map({\n        container: 'map',\n        style:\n            'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',\n        center: [-96, 37.8],\n        zoom: 3\n    });\n\n    // San Francisco\n    var origin = [-122.414, 37.776];\n\n    // Washington DC\n    var destination = [-77.032, 38.913];\n\n    // A simple line from origin to destination.\n    var route = {\n        'type': 'FeatureCollection',\n        'features': [\n            {\n                'type': 'Feature',\n                'geometry': {\n                    'type': 'LineString',\n                    'coordinates': [origin, destination]\n                }\n            }\n        ]\n    };\n\n    // A single point that animates along the route.\n    // Coordinates are initially set to origin.\n    var point = {\n        'type': 'FeatureCollection',\n        'features': [\n            {\n                'type': 'Feature',\n                'properties': {},\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': origin\n                }\n            }\n        ]\n    };\n\n    // Calculate the distance in kilometers between route start/end point.\n    var lineDistance = turf.lineDistance(route.features[0], 'kilometers');\n\n    var arc = [];\n\n    // Number of steps to use in the arc and animation, more steps means\n    // a smoother arc and animation, but too many steps will result in a\n    // low frame rate\n    var steps = 500;\n\n    // Draw an arc between the `origin` & `destination` of the two points\n    for (var i = 0; i < lineDistance; i += lineDistance / steps) {\n        var segment = turf.along(route.features[0], i, 'kilometers');\n        arc.push(segment.geometry.coordinates);\n    }\n\n    // Update the route with calculated arc coordinates\n    route.features[0].geometry.coordinates = arc;\n\n    // Used to increment the value of the point measurement against the route.\n    var counter = 0;\n\n    map.on('load', function () {\n        // Add a source and layer displaying a point which will be animated in a circle.\n        map.addSource('route', {\n            'type': 'geojson',\n            'data': route\n        });\n\n        map.addSource('point', {\n            'type': 'geojson',\n            'data': point\n        });\n\n        map.addLayer({\n            'id': 'route',\n            'source': 'route',\n            'type': 'line',\n            'paint': {\n                'line-width': 2,\n                'line-color': '#007cbf'\n            }\n        });\n\n        map.addLayer({\n            'id': 'point',\n            'source': 'point',\n            'type': 'symbol',\n            'layout': {\n                'icon-image': 'airport_15',\n                'icon-rotate': ['get', 'bearing'],\n                'icon-rotation-alignment': 'map',\n                'icon-overlap': 'always',\n                'icon-ignore-placement': true\n            }\n        });\n\n        function animate() {\n            // Update point geometry to a new position based on counter denoting\n            // the index to access the arc.\n            point.features[0].geometry.coordinates =\n                route.features[0].geometry.coordinates[counter];\n\n            // Calculate the bearing to ensure the icon is rotated to match the route arc\n            // The bearing is calculate between the current point and the next point, except\n            // at the end of the arc use the previous point and the current point\n            point.features[0].properties.bearing = turf.bearing(\n                turf.point(\n                    route.features[0].geometry.coordinates[\n                        counter >= steps ? counter - 1 : counter\n                    ]\n                ),\n                turf.point(\n                    route.features[0].geometry.coordinates[\n                        counter >= steps ? counter : counter + 1\n                    ]\n                )\n            );\n\n            // Update the source with this new data.\n            map.getSource('point').setData(point);\n\n            // Request the next frame of animation so long the end has not been reached.\n            if (counter < steps) {\n                requestAnimationFrame(animate);\n            }\n\n            counter = counter + 1;\n        }\n\n        document\n            .getElementById('replay')\n            .addEventListener('click', function () {\n                // Set the coordinates of the original point back to origin\n                point.features[0].geometry.coordinates = origin;\n\n                // Update the source layer\n                map.getSource('point').setData(point);\n\n                // Reset the counter\n                counter = 0;\n\n                // Restart the animation.\n                animate(counter);\n            });\n\n        // Start the animation.\n        animate(counter);\n    });\n<\/script>\n"},Bxe5:function(t,e,n){var r=n("kr/Y");r=r.default||r,t.exports={component:r,props:{frontMatter:{title:"Animate a point along a route",description:"Use Turf to smoothly animate a point along the distance of a line.",topics:["Camera"],thumbnail:"animate-point-along-route",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './animate-point-along-route.html';"]}}}},M4Oy:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;e.default=o},"kr/Y":function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("q1tI")),a=(n("yr+R"),n("cQZ0"),u(n("uLm5"))),i=u(n("0dsY")),c=u(n("1wO5"));function u(t){return t&&t.__esModule?t:{default:t}}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h={title:"Animate a point along a route",description:"Use Turf to smoothly animate a point along the distance of a line.",topics:["Camera"],thumbnail:"animate-point-along-route",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,u=d(m);function m(){return p(this,m),u.apply(this,arguments)}return e=m,(n=[{key:"render",value:function(){var t=this.props;return o.default.createElement(c.default,s({},t,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"Use ",o.default.createElement("a",{href:"http://turfjs.org/"},"Turf")," to smoothly animate a point along the distance of a line."),o.default.createElement(a.default,s({html:i.default},this.props))))}}])&&l(e.prototype,n),r&&l(e,r),m}(o.default.PureComponent);e.default=b},mOgX:function(t,e,n){"use strict";n.r(e);var r=n("f4rJ");n("yr+R");function o(t,e){return e&&e.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(t)}e.default={js:function(t){return o("js",t)},css:function(t){return o("css",t)}}},uLm5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),c=n("irdr"),u=n.n(c),s=n("M4Oy"),p=n.n(s),l=n("umIL"),f=n("wdKx");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(s,t);var e,n,r,c=g(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=c.call(this,t)).state={unsupported:!1},e}return e=s,(n=[{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,n=t.location,r=this.displayHTML(e),a=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(u.a,{code:this.displayHTML(e),highlighter:function(){return l.highlightHtml},edit:{frontMatter:y(y({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,n=e.frontMatter,r=e.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(i.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(i.supported)()||this.setState({unsupported:!0}),this.iframe){var t=this.iframe.contentWindow.document;t.open(),t.write(this.renderHTML(this.props.html)),t.close()}}}])&&h(e.prototype,n),r&&h(e,r),s}(o.a.Component);O(x,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,n){"use strict";function r(t){return!o(t)}function o(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{e=new Worker(r),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(r),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var t=document.createElement("canvas");t.width=t.height=1;var e=t.getContext("2d");if(!e)return!1;var n=e.getImageData(0,0,1,1);return n&&n.width===t.width}()?function(t){void 0===a[t]&&(a[t]=function(t){var e,n=function(t){var e=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,e.getContext("webgl",n)||e.getContext("experimental-webgl",n)}(t);if(!n)return!1;try{e=n.createShader(n.VERTEX_SHADER)}catch(t){return!1}if(!e||n.isContextLost())return!1;return n.shaderSource(e,"void main() {}"),n.compileShader(e),!0===n.getShaderParameter(e,n.COMPILE_STATUS)}(t));return a[t]}(t&&t.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.supported=r,e.notSupportedReason=o;var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,u=t.match(i),s="".concat(t.replace(a,"")),p=t.match(a)[1];u&&(u.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),s="".concat(s.replace(i,"")));if(t.match(r)){var l=t.match(r).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),s="".concat(s.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(o)){var f=t.match(o).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),s="".concat(s.replace(/<link[\s\S]*?>/g,""))}s.match(c)&&(s=s.match(c)[1]);return{html:s,css:e,js:p,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-animate-point-along-route-4fd36d8a039573383461.chunk.js.map