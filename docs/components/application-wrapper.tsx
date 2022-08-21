import React from 'react';

if (typeof window !== 'undefined') {
    import(
        /* webpackChunkName: "assembly-js" */ '@mapbox/mbx-assembly/dist/assembly.js'
    );
}

class ApplicationWrapper extends React.Component<ApplicationWrapperProps> {
    render() {
        return this.props.children;
    }
}

type ApplicationWrapperProps = {
    children?: any
};

export default ApplicationWrapper;
