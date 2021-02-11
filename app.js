const express = require('express');
const app = express();
const path = require('path');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!");
// });

const hostname = '127.0.0.1';
const port = '8000';

app.use('/static', express.static('static'));
app.use(express.urlencoded());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
    res.statusCode = 200;
    res.render('home.pug');
});


app.listen(port, hostname, function () {
    console.log(`server started at http://${hostname}:${port}`);
});
