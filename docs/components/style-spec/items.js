import React from 'react';
import PropTypes from 'prop-types';
import entries from 'object.entries';
import Item from './item.js';

export default class Items extends React.Component {
    render() {
        return (
            <React.Fragment>
                {entries(this.props.entry).map(([name, prop], i) => {
                    // if section begins with the name of a source type, do not display an item for * or type
                    if (
                        [
                            'vector',
                            'raster',
                            'raster-dem',
                            'geojson',
                            'image',
                            'video'
                        ].indexOf(this.props.section) > -1 &&
                        (name === '*' || name === 'type')
                    )
                        return;

                    return (
                        <Item
                            key={i}
                            id={`${
                                this.props.section
                                    ? `${this.props.section}-`
                                    : ''
                            }${name}`}
                            name={name}
                            {...prop}
                            kind={this.props.kind}
                            headingLevel={this.props.headingLevel}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}

Items.propTypes = {
    entry: PropTypes.object.isRequired,
    section: PropTypes.string,
    kind: PropTypes.string,
    headingLevel: PropTypes.oneOf(['2', '3'])
};
