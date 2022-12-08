const API_KEY = '76ecd381893c9643c7281ac68dcfcbb6';

const loadWeather = city => {
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayWeather(data))
     .catch(error => console.log(error))
}
loadWeather('dhaka')

const displayWeather = weather => {
     // for(const temp in weather){
     //      console.log(temp, weather[temp])
     // }
     console.log(weather)
     const tempContainer = document.getElementById('temp-container');
     tempContainer.innerHTML = '';

     const div = document.createElement('div');
     div.innerHTML = `
          <h2>${weather.name}</h2>
          <h4>${weather.main.temp}</h4>
          <h5>${weather.weather[0].main}</h5>
     `;
     tempContainer.appendChild(div);
}