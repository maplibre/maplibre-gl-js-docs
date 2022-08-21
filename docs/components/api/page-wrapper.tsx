import React from 'react';
import PageShell from '../page-shell';
import ApiPageItems from './api-page-items.js';

export default class Api extends React.Component<ApiProps> {
    render() {
        this.props.frontMatter.hideFeedback = true;
        return (
            <PageShell {...this.props}>
                <div className="prose mb18">
                    <ApiPageItems
                        name={this.props.name || this.props.frontMatter.title}
                        location={this.props.location}
                    />
                </div>
            </PageShell>
        );
    }
}

export type ApiProps = {
    frontMatter: {
        title: string
        hideFeedback?: boolean
    },
    location: any,
    name?: string // when the documentation.yml `name` doesn't match the page's title, use this prop to define the documentation.yml `name`
};
