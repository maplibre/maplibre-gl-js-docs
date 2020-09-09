import React from 'react';
import PropTypes from 'prop-types';
import SidebarAccordion from '@mapbox/dr-ui/page-layout/components/layouts/accordion/sidebar';
import { styleSpecNavigation } from '../../data/style-spec-navigation';

export default class StyleSpecSidebar extends React.Component {
    render() {
        const { location, frontMatter } = this.props;
        const { pathname } = location;
        // if there are generated headings, override frontMatter.headings
        const hasGeneratedHeadings = styleSpecNavigation.filter(
            (f) => f.path === pathname
        );
        if (hasGeneratedHeadings.length > 0)
            frontMatter.headings = hasGeneratedHeadings[0].subnav;
        return (
            <SidebarAccordion
                navItems={styleSpecNavigation}
                frontMatter={frontMatter}
                location={location}
            />
        );
    }
}

StyleSpecSidebar.propTypes = {
    frontMatter: PropTypes.object,
    location: PropTypes.object,
    headings: PropTypes.array
};
