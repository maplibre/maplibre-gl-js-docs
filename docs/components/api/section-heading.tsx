import React from 'react';
import Github from './github';

export default class SectionHeading extends React.Component<SectionHeadingProps> {
    render() {
        const { section, headingLevel } = this.props;
        const HeadingLevel:any = `h${headingLevel}`;
        return (
            <React.Fragment>
                <HeadingLevel
                    className="mt36 mb18 txt-xl unprose anchor"
                    id={section.namespace.toLowerCase()}
                >
                    <a
                        className="unprose color-blue-on-hover"
                        href={`#${section.namespace.toLowerCase()}`}
                    >
                        {section.name}
                    </a>
                </HeadingLevel>
                <Github section={section} />
            </React.Fragment>
        );
    }
}

type SectionHeadingProps = {
    headingLevel?: number,
    // section: any;
    section: {
        namespace: string,
        name: string,
        context: {
            github: {
                url: string,
                path: string
            }
        }
    }
};
