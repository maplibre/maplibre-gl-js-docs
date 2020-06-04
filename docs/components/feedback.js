import React from 'react';
import PropTypes from 'prop-types';
import DrFeedback from '@mapbox/dr-ui/feedback';
import constants from '../constants';

export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        };
    }

    componentDidMount() {
        MapboxPageShell.afterUserCheck(() => {
            // fetches username so we can identify them in segment
            this.setState({
                user: MapboxPageShell.getUser() || undefined
            });
        });
    }
    render() {
        return (
            <DrFeedback
                site="Mapbox GL JS"
                location={this.props.location}
                user={this.state.user}
                type={this.props.type}
                webhook={constants.FORWARD_EVENT_WEBHOOK}
                section={this.props.section || undefined}
            />
        );
    }
}

Feedback.propTypes = {
    location: PropTypes.object.isRequired,
    type: PropTypes.string,
    section: PropTypes.string
};
