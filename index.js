const countries = require('./countries.js');
const findPath = require('./pathFinder.js');
const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
    res.send(findPath(req.params.id));
});

const port = process.env.port || 3000;
app.listen(port, () => console.log('connected'));
