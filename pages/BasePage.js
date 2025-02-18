
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

class BasePage {
    constructor(page) {
      this.page = page;
      this.taskURL = process.env.TASK_URL;
      this.valid_username = process.env.VALID_USERNAME;
      this.locked_username = process.env.LOCKED_USERNAME;
      this.other_username = process.env.OTHER_USERNAME;
      this.valid_password = process.env.VALID_PASSWORD;
      this.invalid_password = process.env.INVALID_PASSWORD;
    }

  }
  
module.exports = BasePage;