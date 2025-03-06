const Reminder = require("../src/Reminder"); // Ensure the correct path

describe("Reminder Functionality", () => {
  let reminder;

  // Before each test, instantiate the Reminder class
  beforeEach(() => {
    reminder = new Reminder();
  });

  test("should add a new reminder", () => {
    reminder.addReminder("Meeting at 5 PM");
    expect(reminder.getReminders()).toContain("Meeting at 5 PM");
  });

  test("should remove a reminder", () => {
    reminder.addReminder("Doctor's appointment at 10 AM");
    reminder.removeReminder("Doctor's appointment at 10 AM");
    expect(reminder.getReminders()).not.toContain("Doctor's appointment at 10 AM");
  });

  test("should return all reminders", () => {
    reminder.addReminder("Workout at 6 AM");
    reminder.addReminder("Call client at 3 PM");
    expect(reminder.getReminders()).toEqual(["Workout at 6 AM", "Call client at 3 PM"]);
  });

  test("should not add invalid reminders", () => {
    const invalidReminder = null;
    reminder.addReminder(invalidReminder);
    expect(reminder.getReminders()).not.toContain(invalidReminder);
  });
});
