const countries = require('./countries.js');
const findPath = require('./pathFinder.js');
const express = require('express');
const app = express();


//const countries = [can, usa, mex, blz, gtm, slv, hnd, nic, cri, pan];

// function findPathHelper(queue, finalCountry, visited) {
//     usa.neighbors.forEach(n => {
//         if(finalCountry == n) {
//             n.prev = current;
//             break;
//         }
//     })
//     currentCountry = countries.find(c => c.id == currentCountry);
// }

// function findPath(country) {
//     let visited = new Set();
//     let paths = [];
//     let queue = new Queue();
//     queue.enqueue(usa);
//     return countries.find(c => c.id == country);
// }

app.get('/:id', (req, res) => {
    res.send(findPath(req.params.id));
});

app.listen(3000, () => console.log('connected to port 3000'));