/**
 * Created by areshytko on 06.08.16.
 */

var express = require('express');
var request = require('superagent');

var app = express();

var port = 3000;

app.use(express.static('./dist'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

app.get('/api', function(req, res) {
    console.log("Got request: ", req.query);
    res.json(makeEndpointResponse(req.query));
});

app.listen(port, function(error){
    if (error) throw error;
    console.log("Express server listening on port", port);
});


function makeEndpointResponse(query) {
    return {
        type : "null",
        value : null,
        url : "https://www.npmjs.com/search?q=" + query.text
    };
}