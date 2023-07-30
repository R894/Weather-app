class displayController{
    constructor(){
        this.data;
    }

    changeWeather(data){
        this.setWeatherData(data);
        this.updateWeatherDisplay();
    }

    updateWeatherDisplay(){
        let country = document.querySelector('.country');
        let temp = document.querySelector('.temp');
        let feelsLike = document.querySelector('.feels-like');
        let max = document.querySelector('.temp-max');
        let min = document.querySelector('.temp-min');
    
        country.textContent = `${this.data.name}, ${this.data.country}`;
        temp.textContent = this.data.temp;
        feelsLike.textContent = `Feels like ${this.data.feelsLike}`;
        max.textContent = this.data.tempMax;
        min.textContent = this.data.tempMin;
    }
    
    setWeatherData(data){
        this.data = data;
    }
}


export default displayController;
