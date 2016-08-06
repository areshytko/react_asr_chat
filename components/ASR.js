/**
 * Created by areshytko on 05.08.16.
 */
import React from 'react';
import mic from 'file!../css/mic.gif';
import mic_slash from 'file!../css/mic-slash.gif';
import mic_animate from 'file!../css/mic-animate.gif';


class ASR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            asr : null,
            inProgress : false,
            result : {
                final: '',
                interim: '',
                errors: []
            }
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleResult = this.handleResult.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleStart() {
        this.setState({
            inProgress: true,
            result: {
                final: '',
                interim: '',
                errors: []
            }
        });
    }

    handleError(event) {
        this.setState({ result: Object.assign({}, this.state.result, { errors: this.state.result.errors.concat(event.error) }) })
    }

    handleEnd() {
        this.setState({ inProgress: false });
        if( typeof( this.props.onEnd ) == 'function' ){
            this.props.onEnd();
        }
    }

    handleResult(event) {

        var result = Object.assign({}, this.state.result, { interim: '' });

        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                result.final += event.results[i][0].transcript;
            } else {
                result.interim += event.results[i][0].transcript;
            }
        }

        var newState = Object.assign({}, this.state, { result: result });
        this.setState(newState);
        this.props.onResult( result );
    }

    handleButton() {
        if( this.state.inProgress ){
            this.state.asr.stop();
        }
        else {
            this.state.asr.start();
        }
    }

    componentWillMount(){
        if (!('webkitSpeechRecognition' in window)) {
            upgrade();
        } else {
            var asr = new webkitSpeechRecognition();
            asr.continuous = true;
            asr.interimResults = true;
            asr.lang = 'ru-RU';

            asr.onstart = this.handleStart;
            asr.onerror = this.handleError;
            asr.onend = this.handleEnd;
            asr.onresult = this.handleResult;

            this.setState({ asr: asr })
        }
    }

    render() {

        var result = <div>
                        { this.state.asr != null ?
                            <button onClick={this.handleButton}>
                                <img src={ this.state.inProgress ? mic_animate : mic }/>
                            </button> :
                            <img src={mic_slash}/>
                        }
                    </div>;

        return result;
    }
}

ASR.propTypes = {
    onResult: React.PropTypes.func.isRequired,
    onEnd: React.PropTypes.func
};
ASR.defaultProps = {};

export default ASR;
