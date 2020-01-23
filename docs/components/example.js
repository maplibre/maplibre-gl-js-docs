import React from 'react';
import PropTypes from 'prop-types';
import PageShell from './page_shell';
import Feedback from '@mapbox/dr-ui/feedback';
import constants from '../constants';
import ExampleCode from './example_code';

export default function(html) {
    class ExampleComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                userName: undefined
            };
        }

        render() {
            const { frontMatter } = this.props;
            frontMatter.language = ['JavaScript'];
            frontMatter.contentType = 'example';

            return (
                <PageShell {...this.props}>
                    <div className="relative prose">
                        <div className="round bg-white">
                            <div className="prose">
                                <h1 className="mt0-mm txt-fancy">
                                    {frontMatter.title}
                                </h1>
                                <ExampleCode
                                    html={html}
                                    frontMatter={frontMatter}
                                    location={this.props.location}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt18">
                        <Feedback
                            site="Mapbox GL JS"
                            type="example"
                            location={this.props.location}
                            userName={this.state.userName}
                            webhook={constants.FORWARD_EVENT_WEBHOOK}
                        />
                    </div>
                </PageShell>
            );
        }

        componentDidMount() {
            MapboxPageShell.afterUserCheck(() => {
                this.setState({
                    userName: MapboxPageShell.getUser()
                        ? MapboxPageShell.getUser().id
                        : undefined
                });
            });
        }
    }

    ExampleComponent.propTypes = {
        frontMatter: PropTypes.shape({
            title: PropTypes.string,
            language: PropTypes.array,
            contentType: PropTypes.string
        }),
        location: PropTypes.object
    };

    return ExampleComponent;
}
