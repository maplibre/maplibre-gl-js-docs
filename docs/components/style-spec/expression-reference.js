import React from 'react';
import PropTypes from 'prop-types';
import { groupedExpressions } from '../../data/types';
import SDKSupportTable from '../sdk_support_table';
import md from '../md';
import { highlightJavascript } from '../prism_highlight';
import { renderSignature } from './render-signature';
import Property from './property.js';

export default class ExpressionReference extends React.Component {
    render() {
        const group = groupedExpressions.filter(
            g => g.name === this.props.group
        )[0];
        return (
            <React.Fragment>
                {group.expressions.map(({ name, doc, type, sdkSupport }) => (
                    <React.Fragment key={name}>
                        <Property
                            id={`${
                                group.name === 'Types' ? 'types-' : ''
                            }${name}`}
                        >
                            {name}
                        </Property>

                        {doc && <div>{md(doc)}</div>}

                        {type.map((overload, i) => (
                            <div key={i}>
                                {highlightJavascript(
                                    renderSignature(name, overload)
                                )}
                            </div>
                        ))}
                        {sdkSupport && <SDKSupportTable {...sdkSupport} />}
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }
}

ExpressionReference.propTypes = {
    group: PropTypes.string.isRequired
};
