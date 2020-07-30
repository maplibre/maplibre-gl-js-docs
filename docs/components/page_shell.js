import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withLocation } from '@mapbox/batfish/modules/with-location';
import ReactPageShell from '../../vendor/docs-page-shell/react-page-shell.js';
// dr-ui components
import TopbarSticker from '@mapbox/dr-ui/topbar-sticker';
import BackToTopButton from '@mapbox/dr-ui/back-to-top-button';
import ProductMenu from '@mapbox/dr-ui/product-menu/product-menu';
import PageLayout from '@mapbox/dr-ui/page-layout';
import SectionedNavigation from '@mapbox/dr-ui/sectioned-navigation';
import NavigationAccordion from '@mapbox/dr-ui/navigation-accordion';
import examples from '@mapbox/batfish/data/examples'; // eslint-disable-line
import GithubSlugger from 'github-slugger';
import TopNavTabs from './top-nav-tabs';
import tags from '../data/tags.json';
import plugins from '../data/plugins';
import { routeToPrefixed } from '@mapbox/batfish/modules/route-to';
import Search from '@mapbox/dr-ui/search';
import * as Sentry from '@sentry/browser';
import classnames from 'classnames';
// NavigationAccordion datasets
import apiNavigation from '@mapbox/batfish/data/api-navigation'; // eslint-disable-line
import { styleSpecNavigation } from '../data/style-spec-navigation';
import redirectApiRef from '../util/api-ref-redirect';

import ApiSearch from './api/search';

const redirectStyleSpec = require('../util/style-spec-redirect');

const slugger = new GithubSlugger();

const site = 'Mapbox GL JS';

class PageShell extends React.Component {
    componentDidMount() {
        // redirect hashes on /style-spec/
        if (
            this.props.location.pathname === '/mapbox-gl-js/style-spec/' &&
            this.props.location.hash
        ) {
            if (redirectStyleSpec(this.props.location))
                window.location = redirectStyleSpec(this.props.location);
        }

        // redirect hashes on /api/
        if (
            this.props.location.pathname === '/mapbox-gl-js/api/' &&
            this.props.location.hash
        ) {
            if (redirectApiRef(this.props.location))
                window.location = redirectApiRef(this.props.location);
        }

        // initialize analytics
        if (typeof window !== 'undefined' && window.initializeMapboxAnalytics) {
            window.initializeMapboxAnalytics({
                segmentIntegrations: {
                    'Facebook Pixel': true
                }
            });
        }
        Sentry.init({
            dsn: 'https://6ba8cfeeedad4fb7acb8576f0fd6e266@sentry.io/1384508'
        });
    }

    accordionNavProps(nav, slug, contentType) {
        const { frontMatter } = this.props;
        const sections = nav.map(section => ({
            title: section.title,
            path: `/mapbox-gl-js/${slug}/${
                section.path ? `${section.path}/` : ''
            }`,
            tag: section.tag || undefined
        }));
        const subtitles = nav
            .filter(section => section.title === frontMatter.title)
            .map(section => {
                if (!section.subnav) return;

                return section.subnav.map(subNavItem => ({
                    title: subNavItem.title,
                    path:
                        subNavItem.path ||
                        `${section.path}-${subNavItem.title}`,
                    thirdLevelItems: subNavItem.subnav
                        ? subNavItem.subnav.map(subSubNavItem => ({
                              title: subSubNavItem.title,
                              icon: subSubNavItem.icon || undefined,
                              path:
                                  subSubNavItem.path ||
                                  `${section.path}-${subNavItem.title}-${subSubNavItem.title}`
                          }))
                        : undefined
                }));
            })[0];

        const sidebarContent = (
            <div className="mx0-mm ml-neg24 mr-neg36 relative-mm absolute right left">
                {slug === 'api' && <ApiSearch />}
                <NavigationAccordion
                    currentPath={this.props.location.pathname}
                    contents={{
                        firstLevelItems: sections,
                        secondLevelItems: subtitles || null
                    }}
                    onDropdownChange={value => {
                        routeToPrefixed(value);
                    }}
                />
            </div>
        );
        return {
            contentType,
            sidebarContent,
            sidebarStackedOnNarrowScreens: true
        };
    }

    getExampleSections(data) {
        return Object.keys(data)
            .map(topic => {
                const subNavItems = examples
                    .filter(item => item.tags[0] === topic)
                    .map(item => ({
                        text: item.title,
                        description: item.description,
                        url: item.path,
                        active: this.props.location.pathname === item.path
                    }));
                return {
                    title: data[topic],
                    url: `/mapbox-gl-js/examples/#${topic}`,
                    items: subNavItems,
                    id: topic
                };
            })
            .filter(topic => topic.items.length > 0);
    }

    innerJsxText(jsx) {
        // compliments of https://github.com/CharlesStover/react-innertext
        if (typeof jsx === 'string') {
            return jsx;
        }
        if (Array.isArray(jsx)) {
            return jsx.reduce(
                (previous, current) => previous + this.innerJsxText(current),
                ''
            );
        }
        if (
            Object.prototype.hasOwnProperty.call(jsx, 'props') &&
            Object.prototype.hasOwnProperty.call(jsx.props, 'children')
        ) {
            return this.innerJsxText(jsx.props.children);
        }
        return '';
    }

    getPluginSections(data) {
        return Object.keys(data).map(section => {
            const subNavItems = Object.keys(data[section]).map(item => ({
                text: item,
                description: this.innerJsxText(data[section][item].description),
                url: data[section][item].website
            }));
            return {
                title: section,
                url: `#${slugger.slug(section)}`,
                items: subNavItems
            };
        });
    }

    sectionedNavProps(activeTab, sections) {
        const contentType =
            activeTab.charAt(0).toUpperCase() +
            activeTab.substr(1).toLowerCase();
        const sidebarContent = (
            <SectionedNavigation sections={sections} includeFilterBar={true} />
        );
        return {
            contentType,
            sidebarContent,
            sidebarStackedOnNarrowScreens: false
        };
    }

    getSidebarProps(activeTab) {
        if (activeTab === 'examples') {
            return this.sectionedNavProps(
                activeTab,
                this.getExampleSections(tags)
            );
        } else if (activeTab === 'api') {
            return this.accordionNavProps(
                apiNavigation,
                'api',
                'API Reference'
            );
        } else if (activeTab === 'plugins') {
            return this.sectionedNavProps(
                activeTab,
                this.getPluginSections(plugins)
            );
        } else if (activeTab === 'style-spec') {
            return this.accordionNavProps(
                styleSpecNavigation,
                'style-spec',
                'Style Specification'
            );
        }
    }

    render() {
        const { frontMatter, location } = this.props;

        let activeTab = location.pathname.split('/')[2];
        if (activeTab === 'example') activeTab = 'examples';
        const sidebarProps = this.getSidebarProps(activeTab);
        const topbarContent = {
            productName: site,
            topNav: <TopNavTabs activeTab={activeTab} />
        };

        const meta = this.props.meta || {};
        if (!meta.title && frontMatter.title) {
            meta.title = frontMatter.title;
        }
        if (!meta.description && frontMatter.description) {
            meta.description = frontMatter.description;
        }
        if (!meta.pathname) {
            meta.pathname = location.pathname;
        }
        if (frontMatter.contentType) meta.contentType = frontMatter.contentType;
        if (frontMatter.language) meta.language = frontMatter.language;
        if (frontMatter.level) meta.level = frontMatter.level;

        return (
            <ReactPageShell
                site={site}
                meta={meta}
                darkHeaderText={true}
                includeFooter={false}
                {...this.props}
            >
                <Helmet>
                    <link
                        rel="canonical"
                        href={`https://docs.mapbox.com${meta.pathname}`}
                    />
                </Helmet>
                <div className="shell-header-buffer" />
                <TopbarSticker unStickWidth={980}>
                    <div className="limiter">
                        <div className="grid">
                            <div className="col col--4-mm col--12">
                                <div className="ml24-mm pt12">
                                    <ProductMenu
                                        productName={topbarContent.productName}
                                        homePage="/mapbox-gl-js/"
                                    />
                                </div>
                            </div>
                            <div className="col col--7-mm col--12">
                                <div style={{ height: '50px' }}>
                                    {topbarContent.topNav}
                                </div>
                            </div>
                            <div className="col col--1-mm col--12">
                                <div
                                    className="flex-parent-mm flex-parent--end-main h-full-mm wmax300 wmax-full-mm"
                                    style={{ margin: '7px 0' }}
                                >
                                    <Search site={site} />
                                </div>
                            </div>
                        </div>
                    </div>
                </TopbarSticker>
                <div className="limiter">
                    <PageLayout
                        sidebarTitle={sidebarProps.contentType}
                        sidebarContent={sidebarProps.sidebarContent}
                        sidebarContentStickyTop={60}
                        sidebarContentStickyTopNarrow={0}
                        currentPath={location.pathname}
                        sidebarStackedOnNarrowScreens={
                            sidebarProps.sidebarStackedOnNarrowScreens
                        }
                    >
                        <div
                            className={classnames(`${activeTab}-page `, {
                                'mt60 pt30 mt0-mm pt0-mm': activeTab === 'api', // clear navigationbar
                                'mt30 mt0-mm': activeTab !== 'api'
                            })}
                        >
                            {this.props.children}
                        </div>

                        <div className="fixed block none-mm mx24 my24 z5 bottom right">
                            <BackToTopButton />
                        </div>
                    </PageLayout>
                </div>
            </ReactPageShell>
        );
    }
}

PageShell.propTypes = {
    frontMatter: PropTypes.object,
    location: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.node
};

export default withLocation(PageShell);
