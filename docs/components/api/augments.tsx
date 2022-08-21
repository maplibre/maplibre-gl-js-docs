import React from 'react';
import { formatters } from '../../util/formatters';

export default class Augments extends React.Component<AugmentsProps> {
    render() {
        return (
            <div className="mt12">
                Extends{' '}
                {this.props.section.augments.map((tag, i) => (
                    <span
                        key={i}
                        dangerouslySetInnerHTML={{
                            __html: `${formatters.autolink(tag.name)}`
                        }}
                    />
                ))}
                .
            </div>
        );
    }
}

interface AugmentsProps {
    section: {
      augments: any[]
    };
    headingLevel?: number;
};
