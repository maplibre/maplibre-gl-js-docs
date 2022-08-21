import React from 'react';
import SectionWrapper from './section-wrapper';
import { toHtml, formatType } from '../../util/formatters';

export default class Throws extends React.Component<ThrowsProps> {
    render() {
        const { section } = this.props;
        return (
            <SectionWrapper title="Throws" {...this.props}>
                <ul>
                    {section.throws.map((throws, i) => (
                        <li key={i}>
                            {formatType(throws.type)}:{' '}
                            {toHtml(throws.description, true)}
                        </li>
                    ))}
                </ul>
            </SectionWrapper>
        );
    }
}

type ThrowsProps = {
    section: any,
    headingLevel?: number
};
