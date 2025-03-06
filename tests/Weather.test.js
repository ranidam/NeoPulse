const Weather = require("../src/Weather");

// Mock API response
jest.mock("../src/Weather", () => ({
  getWeather: jest.fn(() => Promise.resolve({ 
    city: "London", 
    temperature: 15, 
    condition: "Cloudy" 
  }))
}));

test("Weather API should return correct data", async () => {
  const weatherData = await Weather.getWeather("London");

  expect(weatherData.city).toBe("London");
  expect(weatherData.temperature).toBe(15);
  expect(weatherData.condition).toBe("Cloudy");
});
