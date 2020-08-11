function showTemperature(weather) {
    let currentTemperature = Math.round(weather.data.main.temp);
    let minTemperature = Math.round(weather.data.main.temp_min);
    let maxTemperature = Math.round(weather.data.main.temp_max);
    let windSpeed = Math.round(weather.data.wind.speed);
    let city = weather.data.name;
    let currentTemp = document.querySelector("#current-temp");
    let minTemp = document.querySelector("#min-temp-top");
    let maxTemp = document.querySelector("#max-temp-top");
    let windSp = document.querySelector("#wind-speed");
    let currentCity = document.querySelector("#current-city");
    currentTemp.innerHTML = currentTemperature;
    minTemp.innerHTML = minTemperature;
    maxTemp.innerHTML = maxTemperature;
    windSp.innerHTML = windSpeed;
    currentCity.innerHTML = `${city} `;
    console.log(weather);
}
function searchCity(event) {
    event.preventDefault();
    let searchCity = document.querySelector("#search-city");
    let title = document.querySelector("#current-city");
    title.innerHTML = `${searchCity.value} `;
    let urlDomain = "https://api.openweathermap.org/data/2.5/";
    let city = searchCity.value;
    let apiKey = "667b3c2d5276fd8b0274db2abae287d7";
    let units = "metric";
    let apiUrl = `${urlDomain}weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
}

function findCity(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "667b3c2d5276fd8b0274db2abae287d7";
    let urlDomain = "https://api.openweathermap.org/data/2.5/";
    let apiUrl = `${urlDomain}weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function showCityTemperature(event) {
    navigator.geolocation.getCurrentPosition(findCity);
}
let myCityButton = document.querySelector("#current-city-button");

myCityButton.addEventListener("click", showCityTemperature);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
