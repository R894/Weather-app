const apiKey = "610e9ac3df8fc4cfb2e95da14e6b4121";

async function getCountryLatLon(country){
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${apiKey}`;

    try{
        const response = await fetch(url, {mode: 'cors'});
        const data = await response.json();
        console.log(data);
        return [data[0].lat, data[0].lon];
    } catch (error){
        console.error('Error:', error);
        return null;
    }
}

async function fetchWeatherData(country, units){
    try{
        const latLon = await getCountryLatLon(country);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&units=${units}&appid=${apiKey}`;

        const response = await fetch(url, {mode: 'cors'});
        const data = await response.json();
        console.log(data);

        const info = {
            name: data.name,
            country: data.sys.country,
            feelsLike: data.main.feels_like,
            temp: data.main.temp,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min
        };

        return info;
    } catch (error){
        console.error('Error', error);
        return null;
    }
}

export default fetchWeatherData;
