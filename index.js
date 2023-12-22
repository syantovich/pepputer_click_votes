require("./dayJsInit");
const calculateVoteInterval = require("./calculateVoteInterval");

const addVote = require("./addVote.js");
const validateTime = require("./validateTime");
const config = require("./config.json");
const { endAt, startFrom } = config;

let isFinished = true;

setInterval(() => {
  const isValidTime = validateTime();
  if (isValidTime) {
    if (isFinished) {
      isFinished = false;
      const time = calculateVoteInterval();

      setTimeout(async () => {
        isFinished = true;
        await addVote();
      }, time);
    }
  } else {
    console.log(`Время работы с ${startFrom} по ${endAt}`);
  }
}, 1000);
