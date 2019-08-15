import React from 'react';
import urls from './urls';
import md from './md';
import PageShell from './page_shell';
import Prism from 'prismjs';
import supported from '@mapbox/mapbox-gl-supported';
import CodeSnippet from '@mapbox/mr-ui/code-snippet';
import Feedback from '@mapbox/dr-ui/feedback';
import constants from '../constants';
import Note from '@mapbox/dr-ui/note';
import WarningImage from '@mapbox/dr-ui/warning-image';

const highlightTheme = require('raw-loader!@mapbox/dr-ui/css/prism.css');

export default function(html) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                filter: '',
                token: undefined,
                userName: undefined,
                unsupported: false
            };
        }

        // Display HTML with production URLs and the logged-in user's access token (if available).
        // Render HTML with possibly-local URLs and a Mapbox access token (don't bill the user for looking at examples).

        displayHTML() {
            return `<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>${this.props.frontMatter.title}</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='${urls.js()}'></script>
    <link href='${urls.css()}' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
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

        renderHTML() {
            return `<!DOCTYPE html>
<html>
<head>
    <meta charset=utf-8 />
    <title>${this.props.frontMatter.title}</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='${urls.js({ local: true })}'></script>
    <link href='${urls.css({ local: true })}' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
    </style>
    <script>mapboxgl.accessToken = '${MapboxPageShell.getMapboxAccessToken()}'</script>
</head>
<body>
${html}
</body>
</html>`;
        }

        render() {
            const { frontMatter } = this.props;
            frontMatter.language = ['JavaScript'];
            frontMatter.contentType = 'example';
            return (
                <PageShell meta={frontMatter}>
                    <div className="relative prose">
                        <div className="round bg-white">
                            <div className="prose">
                                <h1 className="mt0-mm txt-fancy">
                                    {frontMatter.title}
                                </h1>
                                <div className="mb36">
                                    {md(frontMatter.description)}
                                </div>

                                {this.state.unsupported && (
                                    <Note
                                        title="Mapbox GL unsupported"
                                        theme="warning"
                                        imageComponent={<WarningImage color="orange" />}
                                    >
                                        Mapbox GL requires{' '}
                                        <a className="link" href="https://caniuse.com/#feat=webgl">
                                          WebGL support
                                        </a>
                                        . Please check that you are using a supported browser and that{' '}
                                        <a className="link" href="https://get.webgl.org/">
                                          WebGL is enabled
                                        </a>
                                        .
                                    </Note>
                                )}
                            </div>

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

                            <div
                                className="bg-white"
                                data-swiftype-index="false"
                            >
                                <div id="code">
                                    <CodeSnippet
                                        code={this.displayHTML()}
                                        highlightedCode={Prism.highlight(
                                            this.displayHTML(),
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
                    </div>
                    <div className="mt18">
                        <Feedback
                            site="Mapbox GL JS"
                            type="example"
                            location={this.props.location}
                            userName={this.state.userName}
                            webhook={constants.FORWARD_EVENT_WEBHOOK}
                        />
                    </div>
                </PageShell>
            );
        }

        componentDidMount() {
            if (!supported()) this.setState({ unsupported: true });

            if (!this.iframe) return;
            const doc = this.iframe.contentWindow.document;
            doc.open();
            doc.write(this.renderHTML());
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
    };
}
