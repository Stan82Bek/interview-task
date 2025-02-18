const { Before, After, setWorldConstructor } = require("@cucumber/cucumber");
const { chromium, firefox, webkit  } = require("@playwright/test");
const setup = require("../globalPagesSetup");
const LoginPage = require("../pages/LoginPage");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

  class CustomWorld {
    async init(browserName = 'chromium') {
      // Dynamically select the browser type
      let browserType;
      switch (browserName.toLowerCase()) {
        case 'chromium':
          browserType = chromium;
          break;
        case 'firefox':
          browserType = firefox;
          break;
        case 'webkit':
          browserType = webkit;
          break;
        default:
          throw new Error(`Unsupported browser: ${browserName}`);
      }
  
      // Launch the selected browser
      this.browser = await browserType.launch({
        headless: false, // Set to true if you want headless mode
        args: ["--start-maximized"], // Start maximized
        slowMo: 1000, // Slow down operations for debugging
      });
  
      // Create a new context with a custom viewport
      this.context = await this.browser.newContext({
        viewport: null, // Disable default viewport
        screen: { width: 1920, height: 1080 }, // Full HD resolution
      });
  
      // Open a new page in the context
      this.page = await this.context.newPage();
  
      // Perform any setup if needed
      await setup(this.page);
    }
  
    async close() {
      await this.page.close();
      await this.browser.close();
    }
  }
  
  module.exports = CustomWorld;
  
  

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.init();
  await this.page.goto(process.env.TASK_URL);
});



After(async function () {
  After(async function () {
    await this.page.waitForTimeout(5000);;
    await this.close();
  });
});
