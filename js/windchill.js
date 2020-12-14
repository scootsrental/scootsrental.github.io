function wheaterData(town, lat = 0, lon = 0) {

  const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial"
  const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial"
  const alerts = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=f9bb398c42a5e0db7ee5d8fa04b70bde"



  fetch(weatherAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.log(jsonObject);

      document.getElementById("cityname").innerHTML = jsonObject.name;
      document.getElementById("currently").innerHTML = jsonObject.weather[0].description;
      document.getElementById("temp").innerHTML = jsonObject.main.temp;
      document.getElementById("humidity").innerHTML = jsonObject.main.humidity;
    });

  fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsonObject) => {
      const forecastList = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));

      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let i = 0; i < 3; i++) {

        const foreDate = new Date(forecastList[i].dt_txt);
        let iconsrc = 'https://openweathermap.org/img/w/' + forecastList[i].weather[0].icon + '.png';

        let forecastCard = document.createElement('div');
        let weekday = document.createElement('h3');
        let img = document.createElement('img');
        let forecastTemp = document.createElement('p');

        weekday.textContent = weekdays[foreDate.getDay()];
        img.setAttribute('src', iconsrc);
        img.setAttribute('alt', forecastList[i].weather[0].description);
        img.style.width = '4.4em';
        forecastTemp.innerHTML = forecastList[i].main.temp + '&#176;F';

        forecastCard.appendChild(weekday);
        forecastCard.appendChild(img);
        forecastCard.appendChild(forecastTemp);

        document.querySelector('div.dayforecast').appendChild(forecastCard);
      }
    });

  fetch(alerts)
    .then((response) => response.json())
    .then((jsonOBject) => {
      console.log(jsonOBject);
      console.log(jsonOBject.alerts);

      if (jsonOBject.alerts !== undefined){
        document.getElementById("Bar").style.display = "block";

        document.getElementById("left").innerHTML =jsonOBject.alerts.description;
      }
      
    });
}

function Hide(HideID) {
  HideID.style.display = "none";
}

