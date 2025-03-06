const News = require("../src/News");

jest.mock("../src/News", () => ({
  getLatestNews: jest.fn(() => Promise.resolve([
    { title: "Breaking News: AI is Amazing", source: "BBC" },
    { title: "JavaScript is Evolving", source: "TechCrunch" }
  ]))
}));

test("News API should return an array of news", async () => {
  const newsData = await News.getLatestNews();

  expect(Array.isArray(newsData)).toBe(true);
  expect(newsData.length).toBeGreaterThan(0);
  expect(newsData[0]).toHaveProperty("title");
  expect(newsData[0]).toHaveProperty("source");
});
