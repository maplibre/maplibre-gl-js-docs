import React from 'react';
import Copyable from '../copyable.js';
import SectionWrapper from './section-wrapper';
import { toHtml } from '../../util/formatters';

export default class Examples extends React.Component<ExamplesProps> {
    render() {
        const { section } = this.props;
        return (
            <SectionWrapper title="Example" {...this.props}>
                {section.examples.map((example, i) => (
                    <div key={i} className="mb12 api-example">
                        {example.caption && <p>{toHtml(example.caption)}</p>}
                        <Copyable lang="javascript">
                            {example.description}
                        </Copyable>
                    </div>
                ))}
            </SectionWrapper>
        );
    }
}

type ExamplesProps = {
    section: {
        examples: {
            caption?: string;
            description: string;
        }[];
    };
    headingLevel?: number;
};
