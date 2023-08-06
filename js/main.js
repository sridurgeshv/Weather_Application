let longitude = "";
let latitude = "";

function loadSite () {
  if (navigator.geolocation) { // device can return its location
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      getWeather();
    });
  }
}

function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=12963916ca7004188fab5be528d2f20a`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      displayWeatherDetails(json);
      
      // Set background video based on weather condition
      const weatherCondition = json.weather[0].main;
      const weatherVideo = document.getElementById("weatherVideo");
      switch (weatherCondition) {
        case "Rain":
          weatherVideo.src = "./videos/rain.mp4";
          break;
        case "Clouds":
          weatherVideo.src = "./videos/clouds.mp4";
          break;
        case "Clear":
          weatherVideo.src = "./videos/clear.mp4";
          break;
        case "Haze":
          weatherVideo.src = "./videos/fog.mp4";
          break;
        case "Mist":
          weatherVideo.src = "./videos/mist.mp4";
          break;
        case "Snow":
          weatherVideo.src = "./videos/snow.mp4";
          break;
        default:
          weatherVideo.src = "";
          break;
      }
    })
    .catch(function (error) {
      console.log("Error fetching weather data: " + error);
    });
}

function setWeatherVideo(videoName) {
  const weatherVideo = document.getElementById("weatherVideo");
  const videoPath = `./videos/${videoName}`;

  weatherVideo.src = videoPath;
  weatherVideo.load(); // Load the video, but don't play it yet

  weatherVideo.onloadeddata = function () {
    // The video has been loaded, now play it
    weatherVideo.play().then(() => {
      // Video successfully played
    }).catch(error => {
      console.error("Error playing video:", error);
    });
  };

  weatherVideo.onerror = function () {
    console.error("Error loading video:", videoPath);
  };
}

// Define video URLs for different weather conditions
const videoUrls = {
  Clear: './videos/clear.mp4',
  Clouds: './videos/clouds.mp4',
  Rain: './videos/rain.mp4',
  Snow: './videos/snow.mp4',
  Haze: './videos/fog.mp4',
  Mist: './videos/mist.mp4',
  // Add more video URLs for other weather conditions if needed
};

function searchWeather() {
  const locationInput = document.getElementById('locationInput').value;
  const apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationInput)}&format=json&addressdetails=1`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.length > 0) {
              const firstResult = data[0];
              const latitude = firstResult.lat;
              const longitude = firstResult.lon;
              // For example, using OpenWeatherMap API:
              const apiKey = '12963916ca7004188fab5be528d2f20a';
              const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

              fetch(weatherApiUrl)
                  .then(response => response.json())
                  .then(weatherData => {
                      // Update weather details
                      displayWeatherDetails(weatherData);
                      // Update background video based on weather condition
                      updateBackgroundVideo(weatherData.weather[0].main);
                  })
                  .catch(error => console.error('Error fetching weather data:', error));
          } else {
              console.log('No results found for the entered location.');
          }
      })
      .catch(error => console.error('Error fetching location data:', error));
}

function updateBackgroundVideo(weatherCondition) {
  const videoElement = document.getElementById('weatherVideo');
  if (videoUrls.hasOwnProperty(weatherCondition)) {
      videoElement.src = videoUrls[weatherCondition];
  } else {
      // Use the default video for other weather conditions
      videoElement.src = './videos/fair.mp4';
  }
}

function displayWeatherDetails(weatherData) {
  let temperatureInCelsius = Math.round(weatherData.main.temp - 273.15);

  // Update temperature element in HTML
  document.getElementById("temperature").innerHTML = temperatureInCelsius + "°";
  document.getElementById("location").innerHTML = weatherData.name;
  document.getElementById("description").innerHTML = weatherData.weather[0].description;
  document.getElementById("data_city").innerHTML = weatherData.name;
  document.getElementById("data_temperature").innerHTML = Math.round((weatherData.main.temp - 273.15) * 10) / 10 + "°C";
  let tempHighInCelsius = Math.round((weatherData.main.temp_max - 273.15));
  let tempLowInCelsius = Math.round((weatherData.main.temp_min - 273.15));
  document.getElementById("data_temp").innerHTML = "H: " + tempHighInCelsius + "°   L: " + tempLowInCelsius + "°";
  document.getElementById("data_humidity").innerHTML = weatherData.main.humidity + "%";

  // Convert wind speed from m/s to km/h
  let windSpeedInKmph = Math.floor(weatherData.wind.speed * 3.6);
  document.getElementById("data_wind_speed").innerHTML = windSpeedInKmph + " km/h";
  document.getElementById("data_pressure").innerHTML = weatherData.main.pressure + "mb";
  document.getElementById("data_sunrise").innerHTML = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
  document.getElementById("data_sunset").innerHTML = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
}
