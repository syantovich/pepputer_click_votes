const dayjs = require("dayjs");
const fs = require("node:fs");

class Logger {
  constructor({
    fileName,
    dateFormat = "DD.MM.YYYY HH:mm",
    successText = "Успешно",
    errorText = "Ошибка",
  }) {
    this.fileName = fileName;
    this.dateFormat = dateFormat;
    this.successText = successText;
    this.errortext = errorText;
    this.checkFile();
  }
  get filePath() {
    return __dirname + "/" + this.fileName;
  }
  checkFile() {
    fs.access(this.filePath, fs.constants.F_OK, (error) => {
      if (error) {
        fs.open(this.filePath, "w", (err) => {
          if (err) console.log("can't create file " + this.fileName, err);
        });
      }
    });
  }
  _getCurrentTime() {
    return dayjs().format(this.dateFormat);
  }
  write(type, content) {
    try {
      fs.appendFile(
        this.filePath,
        `${this._getCurrentTime()} ${type} ${content}\n`,
        (error) => {},
      );
    } catch (e) {
      console.log(e);
    }
  }

  writeError(content) {
    this.write(this.errortext, content);
  }

  writeSuccess(content) {
    this.write(this.successText, content);
  }
}

module.exports = Logger;
