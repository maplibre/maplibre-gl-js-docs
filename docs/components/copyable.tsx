import React from 'react';
import CodeSnippet from '@mapbox/dr-ui/code-snippet';
import { highlightHtml } from '@mapbox/dr-ui/highlight/html';
import { highlightJsx } from '@mapbox/dr-ui/highlight/jsx';

export default class Copyable extends React.Component<CopyableProps> {
    render() {
        const highlight = {
            html: () => highlightHtml,
            markup: () => highlightHtml,
            javascript: () => highlightJsx
        };
        return (
            <CodeSnippet
                maxHeight={300}
                code={this.props.children}
                highlighter={highlight[this.props.lang]}
            />
        );
    }
}

type CopyableProps = {
    children?: any;
    lang?: 'html' | 'markup' | 'javascript';
};
