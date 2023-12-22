const dayjs = require("dayjs");
const config = require("./config.json");
const { DATE_FORMAT, startFrom, endAt, minVotes, maxVotes } = config;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const calculateVoteInterval = () => {
  const end = dayjs(endAt, DATE_FORMAT);

  const start = dayjs(startFrom, DATE_FORMAT);

  const diff = end.diff(start);

  const minTime = Math.floor(diff / minVotes);
  const maxTime = Math.floor(diff / maxVotes);

  return random(minTime, maxTime);
};

module.exports = calculateVoteInterval;
