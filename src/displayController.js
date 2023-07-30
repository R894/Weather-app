

function displayWeatherData(data){
    let country = document.querySelector('.country');
    let temp = document.querySelector('.temp');
    let feelsLike = document.querySelector('.feels-like');
    let max = document.querySelector('.temp-max');
    let min = document.querySelector('.temp-min');

    country.textContent = `${data.name}, ${data.country}`;
    temp.textContent = data.temp;
    feelsLike.textContent = `Feels like ${data.feelsLike}`;
    max.textContent = data.tempMax;
    min.textContent = data.tempMin;
}

export default displayWeatherData;
