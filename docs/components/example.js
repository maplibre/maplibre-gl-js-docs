/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import urls from './urls';
import md from './md';
import supported from '@mapbox/mapbox-gl-supported';
import CodeSnippet from '@mapbox/dr-ui/code-snippet';
import Note from '@mapbox/dr-ui/note';
import { highlightHtml } from '@mapbox/dr-ui/highlight/html';
import * as helpers from '@mapbox/dr-ui/edit/helpers';

const viewport = `<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />`;
const css = `\tbody { margin: 0; padding: 0; }
\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }`;

export default class Example extends React.Component {
    static defaultProps = {
        displaySnippet: true,
        height: 400
    };
    constructor(props) {
        super(props);
        this.state = {
            token: undefined,
            unsupported: false
        };
    }

    // Display HTML with production URLs and the logged-in user's access token (if available).
    // Render HTML with possibly-local URLs and a Mapbox access token (don't bill the user for looking at examples).

    addToken(html) {
        const addMissingTokenComment = this.state.token
            ? ''
            : `\n\t// TO MAKE THE MAP APPEAR YOU MUST\n\t// ADD YOUR ACCESS TOKEN FROM\n\t// https://account.mapbox.com`;

        return html.replace(
            '<script>',
            `<script>${addMissingTokenComment}\n\tmapboxgl.accessToken = '${this
                .state.token || '<your access token here>'}';`
        );
    }

    displayHTML(html) {
        return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>${this.props.frontMatter.title}</title>
${viewport}
<script src="${urls.js()}"></script>
<link href="${urls.css()}" rel="stylesheet" />
<style>
${css}
</style>
</head>
<body>
${this.addToken(html)}
</body>
</html>`;
    }

    renderHTML(html) {
        return `<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>${this.props.frontMatter.title}</title>
${viewport}
<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin="anonymous"></script>
<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin="anonymous"></script>

<script src='${urls.js({ local: true })}'></script>
<link href='${urls.css({ local: true })}' rel='stylesheet' />
<style>
    ${css}
</style>
<script>mapboxgl.accessToken = '${MapboxPageShell.getMapboxAccessToken()}'</script>
</head>
<body>
${html}
</body>
<script>
if (window.map) {
    var i = new instrumentile(map, {
        token: '${MapboxPageShell.getMapboxAccessToken()}',
        api: 'https://api.tiles.mapbox.com',
        source: 'docs-examples'
    });
}
</script>
</html>`;
    }

    renderSnippet() {
        const { html, location } = this.props;
        const code = this.displayHTML(html);
        const parsedCode = helpers.extractor(code);
        return (
            <div className="bg-white">
                <div id="code" className="relative">
                    <CodeSnippet
                        code={this.displayHTML(html)}
                        highlighter={() => highlightHtml}
                        edit={{
                            frontMatter: {
                                ...this.props.frontMatter,
                                pathname: location.pathname
                            },
                            head: viewport,
                            js: parsedCode.js,
                            html: parsedCode.html,
                            css: parsedCode.css,
                            resources: parsedCode.resources
                        }}
                    />
                </div>
            </div>
        );
    }

    render() {
        const { frontMatter, height } = this.props;

        return (
            <div className="prose">
                {frontMatter.description && (
                    <div className="mb36">{md(frontMatter.description)}</div>
                )}
                {this.state.unsupported && (
                    <Note title="Mapbox GL unsupported" theme="warning">
                        Mapbox GL requires{' '}
                        <a
                            className="link"
                            href="https://caniuse.com/#feat=webgl"
                        >
                            WebGL support
                        </a>
                        . Please check that you are using a supported browser
                        and that{' '}
                        <a className="link" href="https://get.webgl.org/">
                            WebGL is enabled
                        </a>
                        .
                    </Note>
                )}

                {supported() && (
                    <iframe
                        id="demo"
                        style={{ height: height }}
                        className="w-full"
                        allowFullScreen={true}
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        ref={iframe => {
                            this.iframe = iframe;
                        }}
                        title={`${frontMatter.title} example`}
                    />
                )}

                {this.props.displaySnippet && this.renderSnippet()}
            </div>
        );
    }

    componentDidMount() {
        if (!supported()) this.setState({ unsupported: true });

        if (!this.iframe) return;
        const doc = this.iframe.contentWindow.document;
        doc.open();
        doc.write(this.renderHTML(this.props.html));
        doc.close();

        MapboxPageShell.afterUserCheck(() => {
            this.setState({
                token: MapboxPageShell.getUserPublicAccessToken()
            });
        });
    }
}

Example.propTypes = {
    html: PropTypes.string, // eslint-disable-line
    frontMatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string
    }),
    displaySnippet: PropTypes.bool,
    height: PropTypes.number
};
