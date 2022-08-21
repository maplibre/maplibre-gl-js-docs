import React from 'react';
import ApiItem from './item';
import ApiItemContents from './item-contents';
import Github from './github';
import { toHtml } from '../../util/formatters';

import apiFilterItems from '../../util/api-filter-items';


export default class ApiPageItems extends React.Component<ApiPageItemsProps> {
    pageDocSource = apiFilterItems(this.props.name);
    children = this.pageDocSource[0].members.static;
    renderDescription = () => {
        const description = this.pageDocSource[0].description || false;
        if (description) return toHtml(description);
    };
    renderItems = () => {
        // There are 2 layouts based on the content:
        // 1. `SingleSection` (for Maps page)
        // 2. `Section` (for all other pages)

        if (this.children.length === 1) {
            return <SingleSection {...this.children[0]} {...this.props} />;
        }
        return this.children.map((child) => (
            <Section key={child.name} {...this.props} {...child} />
        ));
    };

    render() {
        return (
            <React.Fragment>
                {this.renderDescription()}
                {this.renderItems()}
            </React.Fragment>
        );
    }
}

type ApiPageItemsProps = {
  name: string;
  location: any;
};


class Section extends React.Component<SectionProps> {
    render() {
        const child = this.props;
        return (
            <React.Fragment>
                <div className="mb18">
                    <ApiItem headingLevel={2} {...child} />
                </div>
            </React.Fragment>
        );
    }
}

type SectionProps = {
    name: string,
    location: any
};

class SingleSection extends React.Component<SingleSectionProps> {
    render() {
        const child = this.props;
        return (
            <React.Fragment>
                <div className="mt30-mm mt-neg30-mxl">
                    <Github section={child} />
                </div>
                <div className="mb18">
                    <ApiItemContents {...child} headingLevel={2} />
                </div>
            </React.Fragment>
        );
    }
}
type SingleSectionProps = {
    location: any
};
