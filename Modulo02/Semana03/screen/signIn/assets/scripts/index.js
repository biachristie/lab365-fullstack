let formSignIn = document.getElementById('formSignIn')
formSignIn.addEventListener('submit', logIn);

function logIn(event) {
    event.preventDefault();

    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    console.log(`E-mail: ${email}`);
    console.log(`Password: ${password}`);
}