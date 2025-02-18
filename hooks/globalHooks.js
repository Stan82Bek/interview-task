const { Before, After, setWorldConstructor } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const setup = require("../globalPagesSetup");
const LoginPage = require("../pages/LoginPage");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

class CustomWorld {
  async init() {
    this.browser = await chromium.launch({
      headless: false,
      args: ["--start-maximized"], //Tells Chrome to start maximized
      slowMo: 1000, //slows down Playwright operations by 1 second
    });
    this.context = await this.browser.newContext({
      viewport:null, // This disables the default viewport
      screen: { width: 1920, height: 1080 }, // Adjust these values as needed
    });
    this.page = await this.context.newPage();
    await setup(this.page);
}

  async close() {
    await this.page.close();
    await this.browser.close();
  }
    
}
  

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.init();
  await this.page.goto(process.env.TASK_URL);
});



After(async function () {
  await this.close();
});
