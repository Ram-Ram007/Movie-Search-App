const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;
const recommendationsHeader = document.getElementById("recommendations-header");
let movieId = "";
let recommendationsURL = "";
const main = document.getElementById("main");
const recommendations = document.getElementById("recommendations");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);
function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

function getRecommendations(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      movieId = data.results[0].id;
      recommendationsURL =
        BASE_URL +
        `/movie/${movieId}/recommendations?` +
        API_KEY +
        "&language=en-US&page=1";
      fetch(recommendationsURL)
        .then((res) => res.json())
        .then((data) => {
          showRecommendations(data.results);
        });
    });
}

