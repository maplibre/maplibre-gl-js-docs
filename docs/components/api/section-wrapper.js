import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';

export default class SectionWrapper extends React.Component {
    render() {
        const {
            children,
            headingLevel,
            section,
            title,
            titleComponent
        } = this.props;
        return (
            <div className="section section-h2">
                {title && (
                    <Title headingLevel={headingLevel} section={section}>
                        {title}
                    </Title>
                )}
                {titleComponent ? titleComponent : ''}
                <div className="body h3-section-list">
                    <div className="section section-h3">
                        <div className="body">{children}</div>
                    </div>
                </div>
            </div>
        );
    }
}

SectionWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    titleComponent: PropTypes.node,
    section: PropTypes.object,
    headingLevel: PropTypes.number
};
