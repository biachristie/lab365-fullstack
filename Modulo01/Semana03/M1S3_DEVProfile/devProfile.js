const user = fetch("https://api.github.com/users/biachristie");

user
.then((data) => data.json())
.then((result) => {
    document.querySelector("#title").innerText = `${result?.name} Profile`;
    document.querySelector("#avatar").src = result?.avatar_url;
    document.querySelector("#name").innerText = result?.name;
    document.querySelector("#description").innerText = result?.bio;
    document.querySelector("#github").href = result?.html_url;
    // document.querySelector("#linkedin").href = result?.html_url;
    document.querySelector("#email").innerText = result?.email;
    document.querySelector("#location").innerText = result?.location;
});