import React from 'react';
import Title from './title';

export default class SectionWrapper extends React.Component<SectionWrapperProps> {
    render() {
        const { children, headingLevel, section, title, titleComponent } =
            this.props;
        return (
            <React.Fragment>
                {title && (
                    <Title headingLevel={headingLevel} section={section}>
                        {title}
                    </Title>
                )}
                {titleComponent ? titleComponent : ''}
                {children}
            </React.Fragment>
        );
    }
}

type SectionWrapperProps = {
    children: any;
    title?: string;
    titleComponent?: any;
    section?: any;
    headingLevel?: number;
};
