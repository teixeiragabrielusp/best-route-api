const inquirer = require('inquirer');

//Função que define a interface de linha de comando
const cliArgs = () => {

    var questions = [{
        type: 'input',
        name: 'route',
        message: "Please enter the route (FROM-TO): ",
        filter: input => {
            return input;
        }
    }, {
        type: 'confirm',
        name: 'option',
        message: "Double check the route and confirm..."
    }]

    return inquirer.prompt(questions).then(inputs => {
        if (inputs.option == false) {
            return console.log('Please start the process again!');
        }
        return inputs.route;
    });
}

//Função que retorna a rota escolhido pelo usuário
const selectedRoute = async () => {
    const route = await cliArgs();

    try {
        if (route == undefined) {
            throw Error;

        } else {
            return route;
        }
    } catch (err) {
        throw Error;
    }
}

module.exports = { cliArgs, selectedRoute };