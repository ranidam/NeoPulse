const axios = require('axios');

async function getHelp() {
    const response = await axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow');
    console.log('Latest Coding Questions:');
    response.data.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.title}`);
    });
}

module.exports = { getHelp };
