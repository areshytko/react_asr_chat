/**
 * Created by areshytko on 04.08.16.
 */

import React from 'react';
import  "../css/styles.css";

class MessageItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.content);
    }

  render() {
      const message = this.props.content;
      return (
        <li>
            <span>
              <b style={{color: '#66c'}}><span style={{background: 'Transparent', backgroundRepeat: 'noRepeat', border: 'none', overflow: 'hidden', outline: 'none'}} >{message.user} </span></b>
              <i style={{color: '#aad', opacity: '0.8'}}>{message.time}</i>
            </span>
            <br/>
            <span onClick={this.handleClick} className="anchor_span"> {message.text} </span>
        </li>
    );
  }
}

MessageItem.propTypes = {};
MessageItem.defaultProps = {};

export default MessageItem;
