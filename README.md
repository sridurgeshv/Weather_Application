
# Real-time Weather Experience

Explore our innovative Weather Application that utilizes the OpenWeatherMap API, providing accurate real-time weather updates enhanced by dynamic background videos tailored to the current weather conditions.


## API Reference

To get weather data for a specific location, you can use the following URL format:


```http
GET https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={your_api_key}

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

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Usage](#usage)

## 1. Introduction

### Dynamic Weather Visualization
The Dynamic Weather Visualization application offers users the opportunity to experience weather information dynamically visualized on their screens, accompanied by adaptive background videos. Real-time data retrieved through API calls is presented in an engaging format, providing users with an immersive weather experience.

### 5-Day Weather Forecast
Users can access a comprehensive 5-day weather forecast, carefully curated for easy understanding. This forecast assists users in staying well-prepared for upcoming weather trends, ensuring they are equipped to plan their activities accordingly.

### Location-specific Weather
Easily search and access accurate weather details for preferred locations using the intuitive search feature. This feature ensures personalized weather information for selected destinations, enhancing user convenience and satisfaction.

### User-Centric Interface
The application boasts a user-centric interface designed for smooth navigation and convenience. Users can effortlessly access the weather information they require, thanks to the intuitively designed user interface.

## 2. Features

- **Location-Based Weather Search**: Enables users to search for weather details based on their preferred locations.
- **Comprehensive Forecast**: Provides users with a detailed 5-day weather forecast for better planning.
- **Dynamic Background Videos**: Enhances user experience with adaptive background videos corresponding to weather conditions.
- **Live Previews**: Offers real-time updates and previews of weather information.
- **Fullscreen Mode**: Allows users to view weather information in fullscreen mode for a more immersive experience.

## 3. Usage

Explore the application firsthand by visiting the following link: 
[Weather Application Link](https://weather-application-815eb.web.app)

