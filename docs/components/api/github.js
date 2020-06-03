import React from 'react';
import PropTypes from 'prop-types';
import IconText from '@mapbox/mr-ui/icon-text';

export default class GitHub extends React.Component {
    render() {
        const { section } = this.props;
        return (
            section.context &&
            section.context.github && (
                <a
                    className="link--gray unprose block mt-neg12 txt-mono mb18"
                    href={section.context.github.url}
                >
                    <IconText iconBefore="github">
                        {section.context.github.path}
                    </IconText>
                </a>
            )
        );
    }
}

GitHub.propTypes = {
    section: PropTypes.shape({
        context: PropTypes.shape({
            github: PropTypes.shape({
                url: PropTypes.string,
                path: PropTypes.string
            })
        })
    })
};
