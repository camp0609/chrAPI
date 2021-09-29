const countries = require('./countries.js');

function reset() {
    //reset to country default state
    countries.countriesList.forEach(country => {
        country.previous = null;
        country.visited = false;
    });
}

function bfs(queue, stack, destination) {
    while(queue.length != 0) {
        let current = queue.shift();
        stack.push(current);
        if (current.id == destination){
            return true;
        }
     
        for(let i = 0; i < current.neighbors.length; i++) {
            if(current.neighbors[i].visited == false) {
                current.neighbors[i].visited = true;
                current.neighbors[i].previous = current;
                queue.push(current.neighbors[i]);
            }
        }
    }
    return false;
}

function buildList(stack) {
    let shortestPath = [];
    let currentTail = stack.pop();
    let nextTail = currentTail.previous;
    shortestPath.unshift(currentTail.id);
    while(stack.length != 0) {
        currentTail = stack.pop();
        if(currentTail == nextTail) {
            shortestPath.unshift(currentTail.id);
            nextTail = currentTail.previous;
        }
    }
    reset();
    return shortestPath;
}

module.exports = function findPath(destination) {
    let queue = [];
    let stack = [];
    let current = countries.usa;
    current.visited = true;
    queue.push(current);
    if(bfs(queue, stack, destination)){
        return buildList(stack);
    }else {
        reset();
        return "There is no path to this country from the USA";
    }
}
