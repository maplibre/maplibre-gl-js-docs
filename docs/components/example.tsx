/* eslint-disable xss/no-mixed-html */

import React from 'react';
import urls from './urls';
import { supported } from '@mapbox/mapbox-gl-supported';
import CodeSnippet from '@mapbox/dr-ui/code-snippet';
import Note from '@mapbox/dr-ui/note';
import { highlightHtml } from '@mapbox/dr-ui/highlight/html';
import * as helpers from '@mapbox/dr-ui/edit/helpers';

const viewport = `<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />`;
const css = `\tbody { margin: 0; padding: 0; }
\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }`;

export default class Example extends React.Component<
    ExampleProps,
    { unsupported: any }
> {
    static defaultProps = {
        displaySnippet: true,
        height: 400
    };
    constructor(props) {
        super(props);
        this.state = {
            unsupported: false
        };
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
${html}
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


<script src='${urls.js({ local: true })}'></script>
<link href='${urls.css({ local: true })}' rel='stylesheet' />
<style>
    ${css}
</style>
</head>
<body>
${html}
</body>
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
                        className="w-full mt18"
                        allowFullScreen={true}
                        // @ts-ignore
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        ref={(iframe) => {
                            // @ts-ignore
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

        // @ts-ignore
        if (!this.iframe) return;
        // @ts-ignore
        const doc = this.iframe.contentWindow.document;
        doc.open();
        doc.write(this.renderHTML(this.props.html));
        doc.close();
    }
}

type ExampleProps = {
    html?: string; // eslint-disable-line
    frontMatter?: {
        title: string;
    };
    location?: {
        pathname: string;
    };
    displaySnippet?: boolean;
    height?: number;
};
