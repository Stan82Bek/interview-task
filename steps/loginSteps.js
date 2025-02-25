const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


When('I enter username {string}', async function (username) {
  await pageManager.loginPage.enterUsername(username);
});

When('I enter password {string}', async function (password) {
  await pageManager.loginPage.enterPassword(password);
});


When('I enter username', async function () {
  await pageManager.loginPage.enterUsername();
 });
 
 When('I enter password', async function () {
   await pageManager.loginPage.enterPassword();
 });

When('I click the login button', async function () {
  await pageManager.loginPage.clickLoginButton();
});

Then('I should be logged in successfully', async function () {
  await pageManager.loginPage.verifyTitle();
});

Then('I need to verify error message {string}', async function (message) {
  await pageManager.loginPage.ErrorMessage(message);
});
