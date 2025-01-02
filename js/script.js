const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const signuplink = document.querySelector('.signup-link');

let email = document.getElementById('email');
let password = document.getElementById('password');

document.getElementById("login").onclick = function() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
}
signuplink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
