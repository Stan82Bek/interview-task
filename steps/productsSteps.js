
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Then('I need select {int} random products', async function (numberofRandomProducts) {
  await pageManager.productsPage.selectTheProducts(numberofRandomProducts);
});

Then('I need to add selected products to shoping cart', async function () {
 await pageManager.productsPage.addToCart();
});