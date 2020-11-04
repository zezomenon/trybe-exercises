// const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  let joke = document.getElementById('jokeContainer');
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => joke.innerText = data.joke);
};


window.onload = () => fetchJoke();