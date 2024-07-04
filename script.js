const jokeContainer = document.getElementById("Joke");
const button = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit,sexist,racist&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
    });
}
button.addEventListener("click", getJoke);
getJoke();