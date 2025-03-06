const axios = require('axios');

async function getLatestNews() {
    const apiKey = process.env.CURRENTS_API_KEY;  // Get the API key from the .env file
    if (!apiKey) {
        console.log('API key is missing! Please add it to the .env file.');
        return;
    }

    const response = await axios.get(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`);
    console.log('Latest News:');
    response.data.news.forEach((article, index) => {
        console.log(`${index + 1}. ${article.title}`);
    });
}

module.exports = { getLatestNews };
