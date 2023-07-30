import displayWeatherData from './displayController';
import './style.css';
import fetchWeatherData from './weather.js';


fetchWeatherData('Israel').then(info => displayWeatherData(info));

const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', () => {
    let searchInput = document.getElementById("search-input");

    fetchWeatherData(searchInput.value).then(info => displayWeatherData(info));

});