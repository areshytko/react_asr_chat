/**
 * Created by areshytko on 04.08.16.
 */

import React from 'react';
import MessageList from './MessageList';
import MessageComposer from './MessageComposer'
import  "../css/styles.css";


class Chat extends React.Component {

    render() {
        return (
            <div style={{margin: '0', padding: '0', height: '100%', width: '100%', display: '-webkit-box'}}>
                <div className="main">
                    < MessageList messages={this.props.messages} onClick={this.props.onMessageClick} />
                    < MessageComposer onSubmit={this.props.onSubmit} />
                </div>
            </div>
        );
    }
}

Chat.propTypes = {};
Chat.defaultProps = {};

export default Chat;
