import React from 'react';
import IconText from '@mapbox/mr-ui/icon-text';
import { string } from 'prop-types';

export default class GitHub extends React.Component<GitHubProps> {
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

type GitHubProps = {
    section?: {
        context?: {
            github?: {
                url?: string;
                path?: string;
            };
        };
    };
};
