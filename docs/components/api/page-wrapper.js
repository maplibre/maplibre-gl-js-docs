import React from 'react';
import PropTypes from 'prop-types';
import MarkdownPageshell from '../markdown-page-shell';
import ApiPageItems from './api-page-items.js';

export default class Api extends React.Component {
    render() {
        // The feedback module will be added in ApiPageItem
        return (
            <MarkdownPageshell feedback={false} {...this.props}>
                <ApiPageItems
                    name={this.props.name || this.props.frontMatter.title}
                    location={this.props.location}
                />
            </MarkdownPageshell>
        );
    }
}

Api.propTypes = {
    frontMatter: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.object.isRequired,
    name: PropTypes.string // when the documentation.yml `name` doesn't match the page's title, use this prop to define the documentation.yml `name`
};
