var express = require('express');
var path = require('path');
var fs = require('fs');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.resolve(__dirname, './../public')));
app.set('views', path.resolve(__dirname, './../views'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/:uri', function (req, res) {
    if (!fs.existsSync(path.resolve(__dirname, './../views/' +req.params.uri + '.handlebars'))) {
        res.send('Template ' + req.params.uri + '.handlebars nerastas');
    }
    res.render(req.params.uri);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
