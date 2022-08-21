import React from 'react';
import MembersList from './members-list';
import Augments from './augments';
import ClassName from './class-name';
import Parameters from './parameters';
import Properties from './properties';
import Returns from './returns';
import Throws from './throws';
import Examples from './examples';
import Related from './related';
import { toHtml } from '../../util/formatters';
import empty from '../../util/empty';

class ApiItemContents extends React.Component<ApiItemContentsProps> {
    render() {
        const section = this.props;
        const membersList = (members, title) =>
            !empty(members) && (
                <MembersList
                    headingLevel={this.props.headingLevel}
                    section={section}
                    title={title}
                    members={members}
                />
            );

        return (
            <React.Fragment>
                {toHtml(section.description)}

                {!empty(section.augments) && (
                    <Augments
                        headingLevel={this.props.headingLevel}
                        section={{augments: section.augments}}
                    />
                )}

                {section.kind === 'class' &&
                    !section.interface &&
                    (!section.constructorComment ||
                        section.constructorComment.access !== 'private') && (
                        <ClassName
                            headingLevel={this.props.headingLevel}
                            section={{name:section.name}}
                        />
                    )}

                {!empty(section.params) &&
                    (section.kind !== 'class' ||
                        !section.constructorComment ||
                        section.constructorComment.access !== 'private') && (
                        <Parameters
                            headingLevel={this.props.headingLevel}
                            section={section}
                        />
                    )}

                {!empty(section.properties) && (
                    <Properties
                        headingLevel={this.props.headingLevel}
                        section={section}
                    />
                )}

                {section.returns && (
                    <Returns
                        headingLevel={this.props.headingLevel}
                        section={section}
                    />
                )}

                {!empty(section.throws) && (
                    <Throws
                        headingLevel={this.props.headingLevel}
                        section={section}
                    />
                )}

                {!empty(section.examples) && (
                    <Examples
                        headingLevel={this.props.headingLevel}
                        section={section}
                    />
                )}

                {membersList(section.members.static, 'Static Members')}
                {membersList(section.members.instance, 'Instance Members')}
                {membersList(section.members.events, 'Events')}

                {!empty(section.sees) && (
                    <Related
                        headingLevel={this.props.headingLevel}
                        section={section}
                    />
                )}
            </React.Fragment>
        );
    }
}

interface ApiItemContentsProps {
    augments?: any[],
    name?: string,
    kind?: string,
    constructorComment?: {
        access: string
    },
    description?: string | object,
    interface?: string,
    params?: any[],
    properties?: any[],
    returns?: any[],
    throws?: any[],
    examples?: any[],
    members?: any,
    sees?: any[],
    headingLevel?: number
};

export default ApiItemContents;
