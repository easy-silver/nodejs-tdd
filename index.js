const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
//index.js는 path에서 생략 가능
const user = require('./api/user');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', user);

app.listen(3000, () => {
    console.log('Example app listening at http://localhost:3000');
});

module.exports = app;