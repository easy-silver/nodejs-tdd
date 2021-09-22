const express = require('express');
const app = express();
const morgan = require('morgan');

const users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bek' },
    { id: 3, name: 'chris' }
];

app.use(morgan('dev'));

app.get('/users', (req, res) => {
    const limit = req.query.limit;
    res.json(users.slice(0, limit));
});

app.listen(3000, () => {
    console.log('Example app listening at http://localhost:3000');
});

module.exports = app;