const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Then ('I need to provide my credentials and click continue button', async function () {
await pageManager.checkoutPage.completeCheckOut(); 
//await pageManager.checkoutPage.verifyComleteMessage();
 });

 Then('I need to verify selected products ready to checkout', async function () {
    await pageManager.checkoutPage.verifySelectedProducts();
   });

   Then('I need to click finish button and verify thank you message', async function () {
    await pageManager.checkoutPage.verifyComleteMessage();
   });


