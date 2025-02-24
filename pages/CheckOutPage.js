const { expect } = require('@playwright/test');



class CheckOutPage   {

  constructor(page) {
    this.page = page;
    this.firstName = page.locator("//input[@id='first-name']");
    this.lastName = page.locator("//input[@id='last-name']");
    this.zipCode = page.locator("//input[@id='postal-code']");
    this.continue = page.locator("//input[@id='continue']");
    this.finish = page.locator("//*[@id='finish']");
    this.thankYouMessage = page.locator("//*[text()='Thank you for your order!']");


  }

  async completeCheckOut() {
    await this.firstName.fill('Will');  
    await this.lastName.fill('Smith');
    await this.zipCode.fill('11230');
    await this.continue.click();
  }

  async verifySelectedProducts() {
    const selectedProducts = await pageManager.productsPage.randomProductNames;
    for (let i = 0; i < selectedProducts.length; i++) {
    const productName = selectedProducts[i].trim();
    console.log(productName+" selected");
    const product = await this.page.locator(`//*[contains(normalize-space(text()), '${productName}')]`);
    await expect(product).toBeVisible();
    }
  }
async verifyComleteMessage(){
    await this.finish.click();
    const message = await this.thankYouMessage.innerText();
    console.log(message);
    await expect(this.thankYouMessage).toContainText('Thank you for your order!');
  
}

  }

  module.exports = CheckOutPage;