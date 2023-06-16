let id = 1;

function getDataFromApi(id) {
    const api = fetch(`https://rickandmortyapi.com/api/character/${id}`);
    api
    .then((response) => response.json())
    .then((body) => {
        document.querySelector("#title").innerText = `${body?.name}`;
        document.querySelector("#cardImage").src = `${body?.image}`;
        document.querySelector("#cardImage").alt = `Image of ${body?.name}`;
        document.querySelector("#status").innerText = `${body?.status}`;
        document.querySelector("#species").innerText = `${body?.species}`;
        document.querySelector("#origin").innerText = `${body?.origin?.name}`;
        document.querySelector("#location").innerText = `${body?.location?.name}`;
    });
}

getDataFromApi(id);

document.querySelector("#leftArrow").addEventListener("click", () => {
    if (id > 2 && id <= 826) {
        document.querySelector("#rightArrow").classList.remove("disabled");
        id--;
        getDataFromApi(id)
    } else if (id == 2){
        document.querySelector("#leftArrow").classList.add("disabled");
        id--;
        getDataFromApi(id)
    }
});

document.querySelector("#rightArrow").addEventListener("click", () => {
    if (id >= 1 && id < 825) {
        document.querySelector("#leftArrow").classList.remove("disabled");
        id++;
        getDataFromApi(id);
    } else if (id == 825) {
        document.querySelector("#rightArrow").classList.add("disabled");
        id++;
        getDataFromApi(id);
    }
});
