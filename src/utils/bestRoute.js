//create graph
graph = {
    'GRU': { 'BRC': 10, 'SCL': 20, 'CDG': 75, 'ORL': 56 },
    'BRC': { 'SCL': 5 },
    'SCL': { 'ORL': 20 },
    'ORL': { 'CDG': 5 }
}

function routes(graph, s) {
    let solutions = {};
    solutions[s] = [];
    solutions[s].dist = 0;

    while (true) {
        let parent = null;
        let nearest = null;
        let dist = Infinity;

        for (let n in solutions) {
            if (!solutions[n])
                continue
            let ndist = solutions[n].dist;
            let adj = graph[n];
            for (let a in adj) {
                if (solutions[a])
                    continue;
                let d = adj[a] + ndist;
                if (d < dist) {
                    parent = solutions[n];
                    nearest = a;
                    dist = d;
                }
            }
        }

        if (dist === Infinity) {
            break;
        }

        solutions[nearest] = parent.concat(nearest);
        solutions[nearest].dist = dist;
    }

    return solutions;
}

function getBestRoute(from, to, callback) {
    solutions = Object.entries(routes(graph, from));

    solutions.forEach(solution => {
        if (solution[0] === to) {
            callback(null, { bestRoute: 'For the route ' + from + '-' + to + ' our best price is $ ' + solution[1].dist });
        }
    });
}

module.exports = getBestRoute;