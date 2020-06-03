import React from 'react';
import PropTypes from 'prop-types';
import slug from 'slugg';
import classnames from 'classnames';

export default class Title extends React.Component {
    render() {
        const { children, section, headingLevel } = this.props;
        const pageName =
            section && section.name === 'Map class' ? 'Map' : section.name;
        const id = slug(`${pageName || ''} ${children}`);
        const HeadingLevel = `h${headingLevel}`;

        return (
            <HeadingLevel
                id={id}
                className={classnames(
                    'py6 mt12 txt-m my0 no-h2-border scroll-margin-top',
                    {
                        'pb6 pt18': headingLevel === 2
                    }
                )}
                style={{
                    lineHeight: '24px',
                    fontSize: '15px'
                }}
            >
                <a
                    className="unprose block color-blue-on-hover txt-bold"
                    href={`#${id}`}
                >
                    {children}
                </a>
            </HeadingLevel>
        );
    }
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    section: PropTypes.shape({
        name: PropTypes.string
    }),
    headingLevel: PropTypes.number
};
