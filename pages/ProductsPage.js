const { expect } = require('@playwright/test');

class ProductsPage {
    constructor(page) {
      this.page = page;
      this.cartButton = page.locator("//*[@data-test='shopping-cart-link']");
      this.randomProductNames=this.randomProductNames;
    }
        
    async selectTheProducts(numberOfProducts) {
        const productNames = ['Backpack', 'Bike Light', 'Bolt T-Shirt', 'Fleece Jacket', 'Onesie', 'Test.allTheThings()'];
    
        // Shuffle and select random products
        const shuffledProductNames = this.shuffleArray(productNames);
        this.randomProductNames = shuffledProductNames.slice(0, numberOfProducts);

    
        // Find and click the 'Add' button for each random product
        for (let i = 0; i < this.randomProductNames.length; i++) {
            const productName = this.randomProductNames[i].trim();

            // Locator with normalize-space to handle extra spaces
            const productLocator = this.page.locator(
                `//div[@class='inventory_item_label']//div[contains(normalize-space(text()), '${productName}')]/ancestor::div[@class='inventory_item']//button[contains(text(),'Add')]`
            );
            const removeBtnLocator = this.page.locator(
                `//div[@class='inventory_item_label']//div[contains(normalize-space(text()), '${productName}')]/ancestor::div[@class='inventory_item']//button[contains(text(),'Remove')]`
            );
    
            try {
                // Wait for the "Add" button to be visible
                await productLocator.waitFor({ state: 'visible' });
    
                // Check if the "Remove" button is not visible (i.e., the product has not been added yet)
                const isRemoveButtonVisible = await removeBtnLocator.isVisible();
                if (!isRemoveButtonVisible) {
                    await productLocator.click();
                    console.log(`Successfully clicked "Add" for product: ${productName}`);
                } else {
                    console.log(`Product "${productName}" is already added.`);
                }
            } catch (error) {
                console.error(`Failed to find or click "Add" button for product: ${productName}`);
            }
        }
    }
    

    

    async addToCart() {
        await this.cartButton.click();
        await this.page.waitForTimeout(2000);
    }

shuffleArray(array) {
  // Fisher-Yates (Knuth) shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

}
  module.exports = ProductsPage;