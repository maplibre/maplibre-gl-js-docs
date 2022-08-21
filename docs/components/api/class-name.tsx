import React from 'react';
import { formatters } from '../../util/formatters';

export default class ClassName extends React.Component<ClassNameProps> {
    render() {
        const { section } = this.props;
        return (
            <div
                className="txt-code my18 py12 px12 txt-s"
                dangerouslySetInnerHTML={{
                    __html: `<span class="token keyword">new</span> <span class="token class-name">${
                        section.name
                    }</span>${formatters.parameters(section)}`
                }}
            />
        );
    }
}

type ClassNameProps = {
    section: {
      name: string
    },
    headingLevel?: number
};
