/**
 * Created by areshytko on 04.08.16.
 */

import React from 'react';
import ReactDom from 'react-dom';
import ASR from './ASR'
import { FormControl } from 'react-bootstrap';
import Message from '../app/Message';

class MessageComposer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text : "",
            isSpeaking : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleASR = this.handleASR.bind(this);
        this.handleASRend = this.handleASRend.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        if (event.which === 13) { // Enter
            event.preventDefault();
            this.props.onSubmit(new Message(this.state.text, this.props.user));
            this.setState({ text: '' });
        }
    }

    handleASR(event) {
        // @TODO change it
        this.setState({ text: event.final + event.interim + event.errors.join()});
    }
    
    handleASRend() {
        ReactDom.findDOMNode(this.refs.messageComposer).focus();
    }


    render() {
        return (
            <div style={{
                zIndex: '52',
                left: '21.1rem',
                right: '1rem',
                width: '100%',
                flexShrink: '0',
                order: '2',
                marginTop: '0.5em'
              }}>
                <FormControl
                    name="message"
                    ref="messageComposer"
                    autoFocus="true"
                    type="textarea"
                    value={this.state.text}
                    placeholder="Введите текст"
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}
                />
                < ASR onResult={this.handleASR} onEnd={this.handleASRend} />
            </div>
        );
    }
}

MessageComposer.propTypes = {
    user: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired
};
MessageComposer.defaultProps = {
    user: "Пользователь"
};

export default MessageComposer;
