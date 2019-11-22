import React from 'react';
import urls from './urls';
import md from './md';
import Prism from 'prismjs';
import supported from '@mapbox/mapbox-gl-supported';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import EditButtons from './edit-buttons';
import Note from '@mapbox/dr-ui/note';
import WarningImage from '@mapbox/dr-ui/warning-image';

const highlightTheme = require('raw-loader!@mapbox/dr-ui/css/prism.css');
const viewport = `<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />`;
const css = `body { margin: 0; padding: 0; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; };`;

export default class ExampleCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            token: undefined,
            unsupported: false
        };
    }

    // Display HTML with production URLs and the logged-in user's access token (if available).
    // Render HTML with possibly-local URLs and a Mapbox access token (don't bill the user for looking at examples).

    displayHTML(html) {
        return `<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<title>${this.props.frontMatter.title}</title>
${viewport}
<script src='${urls.js()}'></script>
<link href='${urls.css()}' rel='stylesheet' />
<style>
    ${css}
</style>
</head>
<body>
${html.replace(
    '<script>',
    `<script>\nmapboxgl.accessToken = '${this.state.token ||
        '<your access token here>'}';`
)}
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
<script>mapboxgl.accessToken = '${MapboxPageShell.getMapboxAccessToken()}'</script>
</head>
<body>
${html}
</body>
</html>`;
    }

    render() {
        const { frontMatter, html } = this.props;
        return (
            <div className="prose">
                <div className="mb36">{md(frontMatter.description)}</div>
                {this.state.unsupported && (
                    <Note
                        title="Mapbox GL unsupported"
                        theme="warning"
                        imageComponent={<WarningImage color="orange" />}
                    >
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
                        style={{ height: 400 }}
                        className="w-full"
                        allowFullScreen={true}
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        ref={iframe => {
                            this.iframe = iframe;
                        }}
                    />
                )}

                <div className="bg-white" data-swiftype-index="false">
                    <div id="code" className="relative">
                        <EditButtons
                            code={this.displayHTML(html)}
                            css={css}
                            frontMatter={this.props.frontMatter}
                            rawHtml={html}
                            head={viewport}
                            url={`https://docs.mapbox.com${this.props.location.pathname}`}
                        />
                        <CodeSnippet
                            code={this.displayHTML(html)}
                            highlightedCode={Prism.highlight(
                                this.displayHTML(html),
                                Prism.languages['markup']
                            )}
                            highlightThemeCss={highlightTheme}
                            onCopy={() => {
                                analytics.track(
                                    'Copied example with clipboard'
                                );
                            }}
                        />
                    </div>
                </div>
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
                token: MapboxPageShell.getUserPublicAccessToken(),
                userName: MapboxPageShell.getUser()
                    ? MapboxPageShell.getUser().id
                    : undefined
            });
        });
    }
}
