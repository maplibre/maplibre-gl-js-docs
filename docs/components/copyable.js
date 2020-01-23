import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippet from '@mapbox/dr-ui/code-snippet';
import { highlightHtml } from '@mapbox/dr-ui/highlight/html';
import { highlightJsx } from '@mapbox/dr-ui/highlight/jsx';

export default class Copyable extends React.Component {
    render() {
        const highlight = {
            html: () => highlightHtml,
            markup: () => highlightHtml,
            javascript: () => highlightJsx
        };
        return (
            <div className="mb18">
                <CodeSnippet
                    code={this.props.children}
                    highlighter={highlight[this.props.lang]}
                />
            </div>
        );
    }
}

Copyable.propTypes = {
    children: PropTypes.node,
    lang: PropTypes.oneOf(['html', 'markup', 'javascript'])
};
