import React from 'react';
import PropTypes from 'prop-types';
import PageShell from './page_shell';
import Feedback from '@mapbox/dr-ui/feedback';
import constants from '../constants';

class MarkdownPageshell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: undefined
        };
    }

    componentDidMount() {
        MapboxPageShell.afterUserCheck(() => {
            // fetches username so we can identify them in segment
            this.setState({
                userName: MapboxPageShell.getUser()
                    ? MapboxPageShell.getUser().id
                    : undefined
            });
        });
    }
    render() {
        return (
            <PageShell {...this.props}>
                <div className="prose">
                    {this.props.location.pathname !==
                        '/mapbox-gl-js/overview/' && (
                        <h1 className="txt-fancy">
                            {this.props.frontMatter.title}
                        </h1>
                    )}
                    {this.props.children}
                </div>

                <div className="mt18">
                    <Feedback
                        site="Mapbox GL JS"
                        location={this.props.location}
                        userName={this.state.userName}
                        webhook={constants.FORWARD_EVENT_WEBHOOK}
                    />
                </div>
            </PageShell>
        );
    }
}

MarkdownPageshell.propTypes = {
    frontMatter: PropTypes.object,
    location: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.node
};

export default MarkdownPageshell;
