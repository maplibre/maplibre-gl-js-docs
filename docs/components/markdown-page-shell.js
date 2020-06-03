import React from 'react';
import PropTypes from 'prop-types';
import PageShell from './page_shell';
import Feedback from './feedback';

class MarkdownPageshell extends React.Component {
    render() {
        return (
            <PageShell {...this.props}>
                <div className="prose mb18">
                    {this.props.location.pathname !== '/mapbox-gl-js/api/' && (
                        <h1 className="txt-fancy">
                            {this.props.frontMatter.title}
                        </h1>
                    )}
                    {this.props.children}
                </div>

                {this.props.feedback && (
                    <Feedback location={this.props.location} />
                )}
            </PageShell>
        );
    }
}

MarkdownPageshell.defaultProps = {
    feedback: true
};

MarkdownPageshell.propTypes = {
    frontMatter: PropTypes.object,
    location: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.node,
    feedback: PropTypes.bool
};

export default MarkdownPageshell;
