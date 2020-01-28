import React from 'react';
import PropTypes from 'prop-types';

export default class Property extends React.Component {
    render() {
        const { headingLevel, id, children } = this.props;
        const Heading = `h${headingLevel}`;
        return (
            <a
                className="style-spec-property unprose cursor-default color-blue-on-hover mb3 block"
                style={{ paddingTop: 50 }} // clear the topbar sticker
                href={`#${id}`}
                id={id}
            >
                <Heading
                    className="txt-mono cursor-pointer"
                    style={{
                        padding: 0,
                        margin: 0,
                        fontSize: '18px',
                        lineHeight: '30px'
                    }}
                >
                    {children}
                </Heading>
            </a>
        );
    }
}

Property.defaultProps = {
    headingLevel: '2'
};

Property.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    headingLevel: PropTypes.oneOf(['2', '3'])
};
