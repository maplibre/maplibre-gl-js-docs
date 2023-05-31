import React from 'react';
import PropTypes from 'prop-types';
// docs-page-shell
import ReactPageShell from '../../vendor/docs-page-shell/react-page-shell.js';
// dr-ui components
import PageLayout from '@mapbox/dr-ui/page-layout';
import { buildMeta, findParentPath } from '@mapbox/dr-ui/page-layout/utils';
// site variables
import constants from '../constants';
// batfish modules
import { withLocation } from '@mapbox/batfish/modules/with-location';
// dataSelectors
import navigation from '@mapbox/batfish/data/navigation';
import filters from '@mapbox/batfish/data/filters';
import apiNavigation from '@mapbox/batfish/data/api-navigation';

import plugins from '../data/plugins.json';

import Search from './api/search';
import AppropriateImage from './appropriate-image';
import Browser from '@mapbox/dr-ui/browser';
import redirectApiRef from '../util/api-ref-redirect';
import { version } from '../../node_modules/maplibre-gl/package.json';
import slug from 'slugg';

class PageShell extends React.Component {
    componentDidMount() {
        // redirect hashes on /api/
        if (
            this.props.location.pathname === '/maplibre-gl-js-docs/api/' &&
            this.props.location.hash
        ) {
            if (redirectApiRef(this.props.location))
                window.location = redirectApiRef(this.props.location);
        }
    }
    renderCustomHeadings = () => {
        const { location, frontMatter } = this.props;

        const subSection = findParentPath(navigation, location.pathname);
        if (subSection === '/maplibre-gl-js-docs/api/')
            return (
                frontMatter.headings ||
                apiNavigation.filter((f) => f.path === location.pathname)[0]
                    .subnav
            );
        else if (subSection === '/maplibre-gl-js-docs/plugins/') {
            const headings = Object.keys(plugins).reduce((arr, key) => {
                arr.push({
                    slug: slug(key),
                    text: key,
                    level: 2
                });
                return arr;
            }, []);

            return headings || [];
        } else {
            return frontMatter.headings;
        }
    };
    renderCustomAside = () => {
        const subSection = findParentPath(
            navigation,
            this.props.location.pathname
        );
        if (subSection === '/maplibre-gl-js-docs/api/') return <Search />;
        else return undefined;
    };
    render() {
        const { location, children, frontMatter } = this.props;
        const meta = buildMeta(frontMatter, location.pathname, navigation);

        return (
            <ReactPageShell
                site={constants.SITE}
                subsite={undefined}
                {...this.props}
                meta={meta}
                darkHeaderText={true}
            >
                <PageLayout
                    domain={{
                        title: 'MapLibre',
                        path: 'https://maplibre.org/'
                    }}
                    hideSearch={true}
                    location={location}
                    frontMatter={{
                        ...frontMatter,
                        ...(frontMatter.overviewHeader && {
                            overviewHeader: {
                                ...frontMatter.overviewHeader,
                                version: version,
                                ...(frontMatter.overviewHeader.image && {
                                    image: (
                                        <div className="overview-header-browser mb6">
                                            <Browser>
                                                <AppropriateImage
                                                    imageId={
                                                        frontMatter
                                                            .overviewHeader
                                                            .image
                                                    }
                                                    alt=""
                                                    className="hmax300"
                                                />
                                            </Browser>
                                        </div>
                                    )
                                })
                            }
                        }),
                        headings: this.renderCustomHeadings()
                    }}
                    constants={constants}
                    navigation={navigation}
                    filters={filters}
                    AppropriateImage={AppropriateImage}
                    // use custom sidebar for API and Style Spec since this data needs to be generated
                    customAside={this.renderCustomAside()}
                >
                    <div>{children}</div>
                </PageLayout>
            </ReactPageShell>
        );
    }
}

PageShell.propTypes = {
    meta: PropTypes.object,
    frontMatter: PropTypes.object.isRequired,
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
    headings: PropTypes.array
};

export default withLocation(PageShell);
