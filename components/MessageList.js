/**
 * Created by areshytko on 04.08.16.
 */

import React from 'react';
import MessageItem from './MessageItem'

class MessageList extends React.Component {

  render() {

    const messageComponents = this.props.messages.map((message, i) => < MessageItem content={message} onClick={this.props.onClick} key={i} /> );

    return (
        <ul style={{wordWrap: 'break-word', margin: '0', overflowY: 'auto', padding: '0', paddingBottom: '1em', flexGrow: '1', order: '1'}} ref="messageList">
            {messageComponents}
        </ul>
    );
  }
}

MessageList.propTypes = {};
MessageList.defaultProps = {};

export default MessageList;
