require('dotenv').config();
const axios = require('axios');

async function getWeather(city) {
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
        console.log('❌ Weather API key is missing! Add it to the .env file.');
        return;
    }

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        console.log(`🌤️ Weather in ${city}: ${response.data.current.condition.text}`);
        console.log(`🌡️ Temperature: ${response.data.current.temp_c}°C`);
        console.log(`🌬️ Wind Speed: ${response.data.current.wind_kph} km/h`);
        console.log(`💧 Humidity: ${response.data.current.humidity}%`);
    } catch (error) {
        console.log('❌ Failed to fetch weather data.');
        console.error(error);
    }
}

module.exports = { getWeather };
