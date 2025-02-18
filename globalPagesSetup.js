const LoginPage = require('./pages/LoginPage');
const ProductsPage = require('./pages/productsPage');
const CartPage = require('./pages/CartPage');
const CheckOutPage = require('./pages/CheckOutPage');


// Import OTHER CLASSES HERE...


class PageManager {

  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.productsPage = new ProductsPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckOutPage(page);
    // INITIALIZE PAGE INSTANCES HERE...
    

  }
}


global.pageManager = null;
module.exports = async function setup(page) {
    global.pageManager = new PageManager(page);
};
