const params = {
   url: 'https://api.openweathermap.org/data/2.5/',
   appid: '4925411a518a3287ca34c8df1f2621e0',
};
const cities = {
   2643743: 'London',
   2968815: 'Paris',
   625144: 'Minsk',
   703448: 'Kyiv',
   706483: 'Kharkiv'
};

function getWeather() {
   const cityId = document.querySelector('#city').value;
      
   fetch(`${params.url}weather?id=${cityId}&units=metric&appid=${params.appid}`)
         .then((weather) => {
         return weather.json();
      })
      .then(showWeather);
}

function showWeather(data) {
   console.log(data);
   document.querySelector('.out-city').textContent = data.name;
   document.querySelector('.out-temperature').innerHTML = Math.round(data.main.temp) + '&deg;';
   document.querySelector('.out-cloudiness').textContent = data.weather[0]['description'];
   document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   document.querySelector('.out-wind').textContent = 'Wind ' + data.wind['speed'] + ' m/s';
   document.querySelector('.out-pressure').textContent = 'Pressure ' + data.main.pressure + ' mmHg';
   document.querySelector('.out-humidity').textContent = 'Humidity ' + data.main.humidity + ' %';
}

getWeather();
document.querySelector('#city').onchange = getWeather;