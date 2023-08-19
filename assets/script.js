const socket = io();
const messages = document.querySelector('.message');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const userBlock = document.querySelector('.user');
const userName = document.querySelector('.user__name');

const user = prompt('Enter your username', 'user');
userName.innerHTML = `${user}`

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value) {
        socket.emit('chat message', {
            message: input.value,
            name: user
        });
        input.value = ''
    }
});


socket.on('chat message', (data) => {

    
    let randomColor = Math.floor(Math.random() * 4) + 1;

    let selectClass;

    switch (randomColor) {
        case 1:
            selectClass = 'blue';
            break;
        case 2:
            selectClass = 'amber';
            break;
        case 3:
            selectClass = 'green';
            break;
        case 4:
            selectClass = 'gray';
            break;
    }

    const item = document.createElement('li');
    item.className = `message__item ${selectClass}`
    item.innerHTML = `
        <span>
            ${data.name}
        </span>: ${data.message}
    `
    messages.appendChild(item)
})
