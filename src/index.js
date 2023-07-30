import './style.css';
import fetchWeatherData from './weather.js';
import displayController from './displayController';

let d = new displayController();
fetchWeatherData('Israel').then(info => {
    d.setWeatherData(info);
    d.updateWeatherDisplay(info);
});

const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', () => {
    let searchInput = document.getElementById("search-input");

    fetchWeatherData(searchInput.value).then(info => displayWeatherData(info));

});