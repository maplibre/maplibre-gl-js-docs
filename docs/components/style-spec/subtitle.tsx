import React from 'react';

export default class Subtitle extends React.Component<{children:any}> {
    render() {
        return (
            <div className="mb12 color-gray txt-em">{this.props.children}</div>
        );
    }
}
