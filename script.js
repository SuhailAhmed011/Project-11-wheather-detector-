
   const searchBtn = document.getElementById("searchBtn"),
   searchInputValue = document.getElementById("inputValue"),
   temperature = document.getElementById("currentDegree"),
   humidity = document.getElementById("currentHumidity"),
   realFeel = document.getElementById("currentRealFeel"),
   windSpeed = document.getElementById("currentWindSpeed"),
   cityName = document.getElementById("currentCity"),
   countryName = document.getElementById("currentCountry"),
   svgInfo = document.getElementById("iconWeatherImage"),
   time24 = document.getElementById("currentTime")
   mainBody = document.body;
 
 
 
 
 
   
  
  fetch(timeApi)
  .then((response) => response.json())
  .then((geo) => {
    let currentTime24 = geo.time_24;
 
    time24.innerText = currentTime24;
  })
  .catch((err) => {
    alert("Error");
    console.log(err);
  });
 
 
 
   
 searchBtn.addEventListener("click", function () {
   getWeatherData();
   getWeatherData2();
   weeklyInfo();
 });
 
 
 searchInputValue.addEventListener("keypress", function (e) {
   if (e.key === "Enter") {
     getWeatherData();
     getWeatherData2();
     weeklyInfo();
   }
 });
 
 
 function getWeatherData() {
   
   if (!searchInputValue.value) {
     alert("Please enter a city name to search for weather information.");
     return;
   }
   
 
   let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue.value}&appid=8058e2e53a8cdc888b244254fc6ceeed`;
   fetch(api)
     .then((response) => response.json())
     .then((data) => {
       
       let humidityValue = data.main.humidity;
       let realFeelValue = data.main.feels_like;
       let windSpeedValue = data.wind.speed;
       let searchedCityName = data.name;
       let countryShort = data.sys.country;
       let description = data.weather[0].description;
       console.log(description);
       
 
       
       let realFeelTemperature = realFeelValue - 273.15;
 
       
       humidity.innerText = humidityValue;
       realFeel.innerText = Math.round(realFeelTemperature);
       windSpeed.innerText = windSpeedValue;
       cityName.innerText = searchedCityName;
       countryName.innerText = countryShort;
 
       if (description.includes("clear sky")) {
         mainBody.style.backgroundImage = 'url("weatherImages/clearSky.jpg")';
         svgInfo.src = "icons/clear-cloudy.svg";
       } else if (description.includes("cloud")) {
         mainBody.style.backgroundImage = 'url("weatherImages/clouds.jpg")';
         svgInfo.src = "icons/cloudy.svg";
       } else if (
         description.includes("rain") ||
         description.includes("drizzle")
       ) {
         mainBody.style.backgroundImage = 'url("weatherImages/rain.jpg")';
         svgInfo.src = "icons/drizzle.svg";
       } else if (description.includes("thunderstorm")) {
         mainBody.style.backgroundImage =
           'url("weatherImages/thunderstorm.jpg")';
         svgInfo.src = "icons/thunderstorms.svg";
       } else if (description.includes("snow")) {
         mainBody.style.backgroundImage = 'url("weatherImages/snowing.jpg")';
         svgInfo.src = "icons/snow.svg";
       } else if (description.includes("mist")) {
         mainBody.style.backgroundImage = 'url("weatherImages/mist.jpg")';
         svgInfo.src = "icons/fog.svg";
       } else if (description.includes("smoke")) {
         mainBody.style.backgroundImage = 'url("weatherImages/smoke.jpg")';
         svgInfo.src = "icons/fog.svg";
       } else if (description.includes("haze")) {
         mainBody.style.backgroundImage = 'url("weatherImages/haze.jpg")';
         svgInfo.src = "icons/fog.svg";
       } else if (description.includes("dust")) {
         mainBody.style.backgroundImage = 'url("weatherImages/dust.jpg")';
         svgInfo.src = "icons/fog.svg";
       } else if (description.includes("fog")) {
         mainBody.style.backgroundImage = 'url("weatherImages/fog.jpg")';
         svgInfo.src = "icons/fog.svg";
       } else if (description.includes("squall")) {
         mainBody.style.backgroundImage = 'url("weatherImages/squallWind.jpg")';
         svgInfo.src = "icons/windy.svg";
       } else if (description.includes("tornodo")) {
         mainBody.style.backgroundImage = 'url("weatherImages/tornado.jpg")';
         svgInfo.src = "icons/tornado.svg";
       } else if (description.includes("ash")) {
         mainBody.style.backgroundImage = 'url("weatherImages/ash.jpg")';
         svgInfo.src = "icons/fog.svg";
       } else if (description.includes("sand")) {
         mainBody.style.backgroundImage = 'url("weatherImages/sand.jpg")';
         svgInfo.src = "icons/fog.svg";
       } else if (description.includes("hurricane")) {
         mainBody.style.backgroundImage = 'url("weatherImages/hurricane.jpg")';
         svgInfo.src = "icons/fog.svg";
       }
     })
     .catch((err) => {
       alert("Error");
       console.log(err);
     });
 }
 
 
 
 
   
  