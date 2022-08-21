import React from 'react';
import SectionWrapper from './section-wrapper';
import { toHtml } from '../../util/formatters';

export default class Related extends React.Component<RelatedProps> {
    render() {
        const { section } = this.props;
        return (
            <SectionWrapper title="Related" {...this.props}>
                <ul>
                    {section.sees.map((see, i) => (
                        <li key={i}>{toHtml(see.description, true)}</li>
                    ))}
                </ul>
            </SectionWrapper>
        );
    }
}

type RelatedProps = {
    section: {
      sees: any[]
    },
    headingLevel?: number
};
