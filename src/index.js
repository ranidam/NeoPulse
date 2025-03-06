require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const inquirer = require('inquirer');
const weather = require('./Weather');
const news = require('./News');
const Reminder = require("./Reminder");
const reminder = new Reminder(); // Initialize the Reminder class
const codingHelp = require('./CodingHelp');


async function main() {
    console.log("Hello, I'm your personal assistant bot!");

    
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like me to do?',
            choices: ['Weather Updates', 'Latest News', 'Set Reminder', 'Get Coding Help']
        }
    ]);

    switch(answers.action) {
        case 'Weather Updates':
            const cityAnswer = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'city',
                    message: 'Which city would you like the weather for?',
                    default: 'Dhaka',  // Default city if no input is given
                }
            ]);
            await weather.getWeather(cityAnswer.city);  // Pass city name
            break;

        case 'Latest News':
            await news.getLatestNews();
            break;

        case 'Set Reminder':
            const reminderAnswer = await inquirer.prompt([
                {
                    type: "input",
                    name: "reminderText",
                    message: "What is your reminder?"
                },
                {
                    type: "input",
                    name: "time",
                    message: "When would you like to be reminded? (format: YYYY-MM-DD HH:MM)"
                }
            ]);
            reminder.scheduleReminder(reminderAnswer.reminderText, reminderAnswer.time);
            break;
        case 'Get Coding Help':
            await codingHelp.getHelp();
            break;
        default:
            console.log("Invalid choice");
    }
}

main();
