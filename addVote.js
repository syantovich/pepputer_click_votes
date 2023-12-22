const puppeteer = require("puppeteer");
const Logger = require("./logger.js");
const {
  voteLink,
  voteElementCounter,
  voteElementButtonSelector,
} = require("./config.json");

const logger = new Logger({ fileName: "logs.txt" });

const addVote = async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(voteLink);

    // await page.click(voteElementButtonSelector);

    const votesElement = await page.$(voteElementCounter);
    const votesCount = await (
      await votesElement.getProperty("textContent")
    ).jsonValue();
    console.log("Добавленно " + votesCount);
    logger.writeSuccess("Добавленно " + votesCount);
    await browser.close();
  } catch (e) {
    console.log(e);
    logger.writeError(e);
  }
};

module.exports = addVote;
