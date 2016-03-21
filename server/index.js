var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var wins = 0,
    losses = 0;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/stats', function(req, res) {
    res.json({
        "wins": wins,
        "losses": losses
    });
    res.end('yes');
});

app.post('/flip', function(req, res) {
    var call = req.body.call;
    var myArray = ['heads', 'tails'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    if (rand == call) {
        wins = wins + 1;
        res.json({
            "result": "win"
        });
    } else {
        losses = losses + 1;
        res.json({
            "result": "loss"
        });
    }
    res.end('yes');
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});