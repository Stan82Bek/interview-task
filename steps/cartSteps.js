const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Then('I need to checkout the products', async function () {
    await pageManager.cartPage.proceedToCheckout();
  });

  Then('I refresh the page', async function () {
    await pageManager.cartPage.refreshThePage();
  });

  Then('I navigate away and back the page', async function () {
    await pageManager.cartPage.navigateAwayAndBack();
  });
