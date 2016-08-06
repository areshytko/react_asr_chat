import React, { Component } from 'react'
import request from 'superagent';
import Chat from './Chat'
import DetailsWindow from './DetailsWindow'
import Message from '../app/Message';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages : [],
            isReport : true,
            reportUrl : "https://www.google.ru/search?q=sdfsdf"
        };
        this.handleMessageClick = this.handleMessageClick.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
    }

    handleMessageClick(message) {
        var isReport = message.data != null;
        if (isReport) {
            this.setState({ reportUrl: message.data.url, isReport: true });
        }
        else {
            this.setState({ isReport: false });
        }
    }

    makeResponseMessage(response) {
        console.log(response.body);
        return new Message("Dummy answer", "Watson", { url: response.body.url });
    }

    handleRequest(req) {
        request
            .get('/api')
            .query({ text: req.text })
            .then((response) => {
                var message = this.makeResponseMessage(response);
                this.setState({
                    messages: this.state.messages.concat(message),
                    isReport: true,
                    reportUrl: response.body.url
                });
            });
        this.setState({ messages: this.state.messages.concat(req) });
    }

    render() {
        return (
            <div>
                < Chat messages={this.state.messages} onMessageClick={this.handleMessageClick} onSubmit={this.handleRequest} />
                < DetailsWindow isReport={this.state.isReport} dataUrl={this.state.reportUrl} />
            </div> );
    }

}


export default App