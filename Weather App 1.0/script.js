const input = document.querySelector('input');
const btn = document.querySelector('button');
const icon = document.querySelector('.icon');
const city_name = document.querySelector('.city-name');
const temprature = document.querySelector('.temprature');
const weather_description = document.querySelector('.weather-description');

btn.addEventListener('click',()=>{
    let city = input.value;
    getWeather(city);
})

function getWeather(city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'d4c15d244fe6a722af79cafc682d3334'}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const IconCode = data.weather[0].icon;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${IconCode}.png" alt="weather icon"/>`
        
        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        city_name.innerHTML = `${weatherCity}, ${weatherCountry}`;

        let weatherTemp = data.main.temp;
        weatherTemp = weatherTemp - 273;
        const temp = weatherTemp.toFixed(2);
        temprature.innerHTML = `${temp}°C`;

        const weatherDes = data.weather[0].description;
        weather_description.innerHTML = weatherDes;
    }) 
}









