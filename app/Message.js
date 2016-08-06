/**
 * Created by areshytko on 06.08.16.
 */

import moment from 'moment';

class Message {
    constructor(text, user, data=null) {
        this.text = text;
        this.data = data;
        this.user = user;
        this.time = moment().format('lll');
    }
}

export default Message;