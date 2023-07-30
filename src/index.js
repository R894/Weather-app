import './style.css';
import fetchWeatherData from './weather.js';
import displayController from './displayController';

let d = new displayController();

fetchWeatherData('Tel Aviv', 'metric').then(info => {
    d.changeWeather(info);
});

const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    let searchInput = document.getElementById("search-input");
    let celsius = document.getElementById("celsius");
    let unit;

    if(celsius.checked){
        unit = 'metric';
    }else{
        unit = 'imperial';
    }

    fetchWeatherData(searchInput.value, unit).then(info => d.changeWeather(info));
});

searchButton.addEventListener('submit', (e) => {
    e.preventDefault();
    
});