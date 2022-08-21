import React from 'react';
import SectionWrapper from './section-wrapper';
import { toHtml, formatType } from '../../util/formatters';

export default class Returns extends React.Component<ReturnsProps> {
    render() {
        const { section } = this.props;
        return section.returns.map((item, i) => (
            <SectionWrapper key={i} title="Returns" {...this.props}>
                <code>{formatType(item.type)}</code>
                {item.description && (
                    <span>: {toHtml(item.description, true)}</span>
                )}
            </SectionWrapper>
        ));
    }
}

type ReturnsProps = {
    section: any,
    headingLevel?: number
};
