console.log('Client side javascript file is loaded!');

const routesForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

routesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchRoute = search.value;

    messageOne.textContent = 'Loading best route...';
    messageTwo.textContent = '';

    fetch(`/travel?route=${searchRoute}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.route.bestRoute;
            }
        });
    });
});