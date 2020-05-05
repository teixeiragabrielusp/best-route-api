const route = require('./utils/gettingRoute');
const bestRoute = require('./utils/bestRoute');

const findingBestRoute = async () => {

    try {
        let selectedRoute = await route();
        selectedRoute = selectedRoute.toUpperCase().split('-');

        let from = selectedRoute[0];
        let to = selectedRoute[1];

        bestRoute(from, to, (err, results) => {
            if (err) {
                return console.log('Something went wrong, please restart application!');
            }

            return console.log(results.bestRoute);
        });
    } catch (err) {
        return console.log('GT Flight Company');
    }
}

findingBestRoute();