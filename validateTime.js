var customParseFormat = require("dayjs/plugin/customParseFormat");

const dayjs = require("dayjs");
const config = require("./config.json");
const { DATE_FORMAT, startFrom, endAt } = config;

dayjs.extend(customParseFormat);
const validateTime = () => {
  const now = dayjs();
  const end = dayjs(endAt, DATE_FORMAT);

  const start = dayjs(startFrom, DATE_FORMAT);

  if (end.isAfter(now) && start.isBefore(now)) {
    return true;
  }

  return false;
};

module.exports = validateTime;
