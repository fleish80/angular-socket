// Make connection
const socket = io.connect('http://localhost:4000/');

// Query DOM
const message = document.querySelector('#message');
const handle = document.querySelector('#handle');
const btn = document.querySelector('#send');
const output = document.querySelector('#output');
const feedback = document.querySelector('#feedback');

// Emit events
btn.addEventListener('click', ()=> {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
});

// Listen to events
socket.on('chat', (data) => {
    feedback.innerHTML = '';
    output.innerHTML += 
    `<p>
        <strong>
        ${data.handle}
        </strong>
        ${data.message}
    </p>`
});

socket.on('typing', (data) => {
    feedback.innerHTML = 
    `<p>
        <em>${data} is typing a message...</em>
    </p>`
});