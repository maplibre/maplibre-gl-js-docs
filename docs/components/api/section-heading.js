import React from 'react';
import PropTypes from 'prop-types';
import Github from './github';

export default class SectionHeading extends React.Component {
    render() {
        const { section, headingLevel } = this.props;
        const HeadingLevel = `h${headingLevel}`;
        return (
            <React.Fragment>
                <HeadingLevel
                    className="pt18 mt18 pb0 no-h2-border scroll-margin-top"
                    id={section.namespace.toLowerCase()}
                    style={{
                        fontSize: '24px',
                        lineHeight: '36px'
                    }}
                >
                    <a
                        className="unprose color-blue-on-hover"
                        href={`#${section.namespace.toLowerCase()}`}
                    >
                        {section.name}
                    </a>
                </HeadingLevel>
                <Github section={section} />
            </React.Fragment>
        );
    }
}

SectionHeading.propTypes = {
    headingLevel: PropTypes.number,
    section: PropTypes.shape({
        namespace: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        context: PropTypes.shape({
            github: PropTypes.shape({
                url: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired
            })
        })
    }).isRequired
};
