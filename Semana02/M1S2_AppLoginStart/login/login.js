function getLocalData() {   
    const username = document.getElementById("userArea__loginDetails-username");
    const avatar = document.getElementById("avatar");
    
    const localUser = JSON.parse(window.localStorage.getItem("user"));
    username.innerHTML = `Olá, ${localUser.username}!`;
    avatar.src = localUser.avatar;
}

function logOut() {
    const answer = confirm("Are you sure you want to log out?");
    if (answer) {
        window.location.href = "../logout/logout.html";
        window.localStorage.clear();
    }
}

// --------------------------------------------------------------------------------------------
// Exercício 02

let user = {
    name: "Dev",
    lastname: "Hardcore",
    email: "devhardcore@email.com",
    avatar: "../assets/avatar.jpg",
    username: "FullStack",
    password: "Lab365"
}

function getInputValue() {
    let loginUsername = document.getElementById("loginInput-username").value;
    let loginPassword = document.getElementById("loginInput-password").value;

    if (loginUsername == user.username && loginPassword == user.password) {
        window.localStorage.setItem("user", JSON.stringify(user));
        alert("------------------------- Você está logado! ------------------------");
        window.location.href = "../userArea/userArea.html";
    } else {
        alert("---------------------- Credenciais Incorretas ----------------------");
    }
}

// --------------------------------------------------------------------------------------------
// Exercício 03

function checkUser() {
    const localUser = JSON.parse(window.localStorage.getItem("user"));

    if (localUser.username == user.username && localUser.password == user.password) {
        window.location.href = "../userArea/userArea.html";
    } else {
        window.location.href = "login.html";
    }
}

// --------------------------------------------------------------------------------------------
// Exercício 04

function saveInfo(id) {
    let newUser = JSON.parse(window.localStorage.getItem("user"))
    newUser[id] = document.getElementById(id).value;

    if (newUser[id] !== "") {            
        window.localStorage.setItem("user", JSON.stringify(newUser));
        window.location.reload();
    }
}

function editAvatar() {
    let newUser = window.localStorage.getItem("user");
    newUser = newUser ? JSON.parse(newUser) : {};
    newUser.avatar = prompt("Insert new image link");
    
    const newAvatar = document.getElementById("avatar");
    newAvatar.src = newUser.avatar;
    
    window.localStorage.setItem("user", JSON.stringify(newUser));
}
