import React from 'react';
import SectionHeading from './section-heading';
import ApiItemContents from './item-contents';
import SectionWrapper from './section-wrapper';

class ApiItem extends React.Component<ApiItemProps> {
    render() {
        const section = this.props;
        return (
            <SectionWrapper
                headingLevel={section.headingLevel}
                titleComponent={
                    !section.nested && (
                        <SectionHeading
                            headingLevel={section.headingLevel}
                            section={{
                                namespace: section.namespace,
                                name: section.name,
                                context: section.context,
                            }}
                        />
                    )
                }
            >
                <ApiItemContents
                    {...this.props}
                    headingLevel={section.headingLevel + 1} // increment heading level to maintain hierarchy on subordinate items
                />
            </SectionWrapper>
        );
    }
}

type ApiItemProps = {
    nested?: boolean;
    headingLevel?: number;
    location?: any;
    namespace: string;
    name: string;
    context: {
        github: {
            url: string;
            path: string;
        };
    };
};

export default ApiItem;
