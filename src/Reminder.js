const cron = require("node-cron");
const inquirer = require("inquirer");

class Reminder {
  constructor() {
    this.reminders = [];
  }

  // Add a new reminder (with input validation)
  addReminder(reminder) {
    if (reminder && typeof reminder === "string" && reminder.trim() !== "") {
      this.reminders.push(reminder);
      console.log(`✅ Reminder added: ${reminder}`);
    } else {
      console.log("❌ Invalid reminder! Must be a non-empty string.");
    }
  }

  // Remove a specific reminder
  removeReminder(reminder) {
    this.reminders = this.reminders.filter(r => r !== reminder);
    console.log(`🗑 Reminder removed: ${reminder}`);
  }

  // Get all reminders
  getReminders() {
    return this.reminders;
  }

  // Schedule a reminder at a specific time
  scheduleReminder(reminderText, time) {
    const reminderTime = new Date(time);

    // Ensure valid date
    if (isNaN(reminderTime.getTime())) {
      console.log("❌ Invalid date format! Please use 'YYYY-MM-DD HH:MM'");
      return;
    }

    const minute = reminderTime.getMinutes();
    const hour = reminderTime.getHours();
    const day = reminderTime.getDate();
    const month = reminderTime.getMonth() + 1; // Months are 0-based

    const cronExpression = `${minute} ${hour} ${day} ${month} *`;

    cron.schedule(cronExpression, () => {
      console.log(`⏰ Reminder: ${reminderText}`);
    });

    console.log(`✅ Reminder set for: ${time}`);
  }
}

// Function to get user input and schedule a reminder
async function setReminder() {
  const reminderManager = new Reminder();

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "reminder",
      message: "What is your reminder?",
    },
    {
      type: "input",
      name: "time",
      message: "When would you like to be reminded? (format: YYYY-MM-DD HH:MM)",
    },
  ]);

  reminderManager.addReminder(answers.reminder);
  reminderManager.scheduleReminder(answers.reminder, answers.time);
}

module.exports = Reminder;