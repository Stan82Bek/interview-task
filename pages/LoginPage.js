const { expect } = require('@playwright/test');
const BasePage = require("./BasePage");

class LoginPage extends BasePage {

  constructor(page) {
    super(page);
    this.usernameInput = page.locator("//input[@id='user-name']");
    this.passwordInput = page.locator("//input[@id='password']");
    this.loginButton = page.locator("//input[@id='login-button']");
    
  }


  async enterUsername(username) {
    if (username ==='valid username') {
      await this.usernameInput.fill(this.valid_username);
    } else if (username ==='locked'){
      await this.usernameInput.fill(this.locked_username);
    }else if(username ==='other usernames'){
      await this.usernameInput.fill(this.other_username);
    }
  }

  async enterPassword(password) {
    if (password==='invalid'){
      await this.passwordInput.fill(this.invalid_password);
    }else{
      await this.passwordInput.fill(this.valid_password);
    }
    await this.page.waitForTimeout(2000);
  }

  async clickLoginButton() {
    await this.loginButton.click();
    await this.page.waitForTimeout(2000);
  }

  async verifyTitle() {
    const title = await this.page.title();
    console.log(title);
    await expect(this.page).toHaveTitle('Swag Labs');
  }

  async ErrorMessage(message) {
    const errorMessageLocator = await this.page.locator(`//*[contains(text(),'${message}')]`);
    const errorMessage = await errorMessageLocator.innerText();
    console.log('Error message: '+errorMessage);
    expect(errorMessage).toBe(message);
    await this.page.screenshot({ path: 'screenshot.png' });
    }
  }
  

module.exports = LoginPage;
