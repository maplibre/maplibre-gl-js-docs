import React from 'react';


export default class Property extends React.Component<PropertyProps> {
    public static defaultProps = {
        headingLevel: '2'
    };

    render() {
        const { headingLevel, id, children } = this.props;
        const Heading:any = `h${headingLevel}`;
        return (
            <Heading id={id} className="unprose txt-mono anchor txt-l mb3 mt24">
                <a
                    className="style-spec-property unprose cursor-pointer color-blue-on-hover block"
                    href={`#${id}`}
                >
                    {children}
                </a>
            </Heading>
        );
    }
}


type PropertyProps = {
    id: string;
    children: any;
    headingLevel: '2' | '3';
};
