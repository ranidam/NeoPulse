# NeoPulse is a multifunctional API that provides weather updates, the latest news, reminders, and coding assistance. This all-in-one API helps users stay informed, organized, and productive.

## Features

- **Weather**: Get real-time weather updates for any location.
- **News**: Fetch the latest news headlines from various sources.
- **Reminder**: Set and manage reminders with scheduled notifications.
- **Coding Help**: Get coding-related assistance and solutions.

## Installation

Clone this repository and install the dependencies:

```sh
git clone https://github.com/ranidam/NeoPulse.git
cd NeoPulse
npm install
```

## Usage

Run the API using:

```sh
node src/index.js
```

### API Endpoints

#### Weather

```
GET /weather?city={cityName}
```

*Response:*

```json
{
  "city": "New York",
  "temperature": "15°C",
  "description": "Cloudy"
}
```

#### News

```
GET /news?category={categoryName}
```

*Response:*

```json
{
  "category": "technology",
  "headlines": ["Tech breakthrough in AI", "New smartphone released"]
}
```

#### Reminder

```
POST /reminder
```

*Request Body:*

```json
{
  "reminder": "Meeting at 5 PM",
  "time": "2025-03-07 17:00"
}
```

*Response:*

```json
{
  "message": "Reminder set for 2025-03-07 17:00"
}
```

#### Coding Help

```
GET /codinghelp?query={question}
```

*Response:*

```json
{
  "query": "How to reverse a string in JavaScript?",
  "answer": "You can use str.split('').reverse().join('');"
}
```

## Testing

Run tests using:

```sh
npm test
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Developed by Rani Dam.

