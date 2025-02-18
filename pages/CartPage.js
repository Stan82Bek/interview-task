const { expect } = require('@playwright/test');


class CartPage   {

  constructor(page) {
    this.page = page;
    this.CartPage = page.locator("//*[text()='Checkout']");
  }

  async proceedToCheckout() {
    await this.CartPage.click();
  }

async refreshThePage(){
  await this.page.reload();
  console.log('Refreshing the Page')
}

  async navigateAwayAndBack(){

    await this.page.goBack();
    await this.page.waitForLoadState('load');
    console.log('Navigating back to the previous page')
    await this.page.goForward();
    await this.page.waitForLoadState('load');
    console.log('Navigating forward to the next page')

  }
}

  module.exports = CartPage;