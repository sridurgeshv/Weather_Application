
# Real-time Weather Experience

Explore our innovative Weather Application that utilizes the OpenWeatherMap API, providing accurate real-time weather updates enhanced by dynamic background videos tailored to the current weather conditions.


## API Reference

To get weather data for a specific location, you can use the following URL format:


```http
https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={your_api_key}

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `latitude` | `float` | The latitude coordinate of the location for which weather information is requested. |
| `longitude` | `float`| The longitude coordinate of the location for which weather information is requested. |
| `api_key` | `string` | Your API key, which is necessary for accessing the OpenWeatherMap API.|

#### Get location-based information

```http
GET https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationInput)}&format=json&addressdetails=1`
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `locationInput`      | `string` | The location input string to be searched. It should be properly encoded using encodeURIComponent(). |
| `format` | `string` |  The format in which the response should be returned. Default is JSON.|
| `addressdetails` | `integer` | Specifies whether to include address details in the response. Value 1 indicates to include address details, 0 or not specifying it means not to include. |

The provided API, based on OpenStreetMap's Nominatim service, retrieves location data for a given input string. It returns information such as coordinates and address details, with an optional parameter for specifying the response format.



### Parameters
- lat: Latitude of the location (required)
- lon: Longitude of the location (required)
- appid: Your OpenWeatherMap API key (required)




## Documentation

### Dynamic Weather Visualization
Experience weather information dynamically visualized on your screen with adaptive background videos. The application retrieves real-time data through API calls, presenting it in an engaging format.

### 5-Day Weather Forecast
Discover a comprehensive 5-day weather forecast carefully curated for easy understanding, helping you stay well-prepared for upcoming weather trends.

### Location-specific Weather
Easily search and access accurate weather details for your preferred locations. The intuitive search feature ensures personalized weather information for your selected destinations.

### User-Centric Interface
Enjoy smooth navigation through an intuitively designed user interface focused on convenience, allowing easy access to the weather information you require.




## Features

- Location-Based Weather Search
- Comprehensive Forecast
- Dynamic Background Videos
- Live Previews
- Fullscreen Mode

## Usage

Explore the application firsthand by visiting the following link: 
[Weather Application Link](https://weather-application-815eb.web.app)

