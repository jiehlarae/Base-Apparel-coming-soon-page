const input = document.querySelector('input');
const form = document.querySelector('form')
const errorMessage = document.querySelector('#errorMessage')
let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value.trim() !== '' && input.value.match(emailPattern)) {
        errorMessage.textContent = ' ';
        input.classList.remove('icon')
    } else {
        errorMessage.textContent = 'Please provide a valid email';
        input.classList.add('icon')
    }
})