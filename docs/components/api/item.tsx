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
                            section={section}
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
    nested?: boolean,
    headingLevel?: number
};

export default ApiItem;
