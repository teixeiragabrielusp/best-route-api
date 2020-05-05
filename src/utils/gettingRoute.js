const { selectedRoute } = require('../cli/cli');

const route = async () => {

    try {
        const choosedRoute = await selectedRoute();
        return choosedRoute;

    } catch (err) {
        return console.log('Hope to see you soon...');
    }
}

module.exports = route;