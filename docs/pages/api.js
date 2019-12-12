import React from 'react';
import PropTypes from 'prop-types';
import PageShell from '../components/page_shell';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import { version } from '../../mapbox-gl-js/package.json';
import docs from '../components/api.json'; // eslint-disable-line
import GithubSlugger from 'github-slugger';
import createFormatters from 'documentation/src/output/util/formatters';
import LinkerStack from 'documentation/src/output/util/linker_stack';
import ApiItem from '../components/api-item';
import DrUiNote from '@mapbox/dr-ui/note';
import WarningImage from '@mapbox/dr-ui/warning-image';

const meta = {
    title: 'API Reference',
    description:
        'The Mapbox GL JS API documentation to render interactive maps from vector tiles and Mapbox styles.',
    pathname: '/mapbox-gl-js/api/',
    contentType: 'API',
    lanaguage: ['JavaScript']
};

const linkerStack = new LinkerStack({}).namespaceResolver(docs, namespace => {
    const slugger = new GithubSlugger();
    return `#${slugger.slug(namespace)}`;
});

const formatters = createFormatters(linkerStack.link);

function md(ast, inline) {
    if (
        inline &&
        ast &&
        ast.children.length &&
        ast.children[0].type === 'paragraph'
    ) {
        ast = {
            type: 'root',
            children: ast.children[0].children.concat(ast.children.slice(1))
        };
    }
    return (
        <span dangerouslySetInnerHTML={{ __html: formatters.markdown(ast) }} /> // eslint-disable-line
    );
}

class Note extends React.Component {
    render() {
        const note = this.props;
        return (
            <div className="">
                <section className="mb24 prose">
                    <h2 id={note.namespace.toLowerCase()} className="txt-bold">
                        {note.name}
                    </h2>
                    {note.description && (
                        <div className="color-gray txt-l">
                            {md(note.description)}
                        </div>
                    )}
                </section>
            </div>
        );
    }
}

export default class Api extends React.Component {
    render() {
        return (
            <PageShell meta={meta}>
                <div className="prose">
                    <h1 className="mt24 mt0-mm txt-fancy">Mapbox GL JS</h1>
                    <div className="py6 color-gray txt-s mt-neg24 mb12">
                        Current version:{' '}
                        <span className="round bg-gray-faint py3 px6">
                            <a href="https://github.com/mapbox/mapbox-gl-js/releases">
                                mapbox-gl.js v{version}
                            </a>
                        </span>
                    </div>
                    <p>
                        Mapbox GL JS is a JavaScript library that uses WebGL to
                        render interactive maps from{' '}
                        <a href="https://www.mapbox.com/help/define-vector-tiles">
                            vector tiles
                        </a>{' '}
                        and <a href={prefixUrl('/style-spec')}>Mapbox styles</a>
                        . It is part of the Mapbox GL ecosystem, which includes{' '}
                        <a href="https://www.mapbox.com/mobile/">
                            Mapbox Mobile
                        </a>
                        , a compatible renderer written in C++ with bindings for
                        desktop and mobile platforms.
                    </p>
                    <DrUiNote
                        title="Pricing is changing for Mapbox GL JS < v1.0.0"
                        theme="warning"
                        imageComponent={<WarningImage color="orange" />}
                    >
                        <p>
                            If you are using Mapbox GL JS v1.0.0 or higher you
                            will not be affected by this change. Your usage will
                            continue to be counted in{' '}
                            <a href="https://docs.mapbox.com/help/glossary/map-loads/">
                                map loads
                            </a>
                            .
                        </p>
                        <p>
                            If you are using Mapbox GL JS {'<'} v1.0.0, your
                            usage is measured in <em>tile requests</em>. The
                            rate per <em>tile request</em> is changing in
                            December 2019. For more details see{' '}
                            <a href="https://docs.mapbox.com/accounts/overview/pricing/#mapbox-gl-js--v100">
                                our pricing guide
                            </a>
                            .
                        </p>
                        <p>
                            Questions? Reach out to our{' '}
                            <a href="https://support.mapbox.com/hc/en-us">
                                support team
                            </a>
                            .
                        </p>
                    </DrUiNote>
                    <div className="api-section">
                        {docs.map((doc, i) =>
                            doc.kind === 'note' ? (
                                <Note key={i} {...doc} />
                            ) : (
                                <ApiItem
                                    location={this.props.location}
                                    key={i}
                                    {...doc}
                                />
                            )
                        )}
                    </div>
                </div>
            </PageShell>
        );
    }
}

Note.propTypes = {
    namespace: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.object
};

Api.propTypes = {
    location: PropTypes.object
};
