import React from 'react';
import PropTypes from 'prop-types';
import apiNavigation from '@mapbox/batfish/data/api-navigation'; // eslint-disable-line
import apiSearch from '@mapbox/batfish/data/api-search'; // eslint-disable-line
import SidebarAccordion from '@mapbox/dr-ui/page-layout/components/layouts/accordion/sidebar';
import Search from './search';

export default class ApiSidebar extends React.Component {
    render() {
        const { location, headings, frontMatter } = this.props;
        const { pathname } = location;
        // use page headings or use apiNavigation subnav
        const sidebarHeadings =
            headings ||
            apiNavigation.filter((f) => f.path === pathname)[0].subnav;
        return (
            <React.Fragment>
                <Search />
                <SidebarAccordion
                    navItems={apiNavigation}
                    frontMatter={frontMatter}
                    location={location}
                    headings={sidebarHeadings}
                />
            </React.Fragment>
        );
    }
}

ApiSidebar.propTypes = {
    frontMatter: PropTypes.object,
    location: PropTypes.object,
    headings: PropTypes.array
};
