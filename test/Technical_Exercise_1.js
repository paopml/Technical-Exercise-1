const assert = require('assert')
const ReactShopppingCartPage = require('../test/React_Shopping_Cart_Page.js');


describe('Test Checkout Small Sizes',  () => {

    it('I open above website and I add all the Small T-Shirts to my cart. Then, I checkout.',  () => {
        
        // Open URL
        ReactShopppingCartPage.open();

        // Maximize window size
        ReactShopppingCartPage.maximizeWindow();
       
        //Verify if user is on React Shopping Cart Page
        var title = browser.getTitle();
        assert.equal(title, "React Shopping Cart");
        console.log("You are in React Shopping Cart Page");
        browser.pause(5000);

        // Click Small Size
        ReactShopppingCartPage.clickSmallSize();
        
        browser.pause(5000);
        // Select Small Size items
        ReactShopppingCartPage.selectSmallSizeItems();
        browser.pause(5000);
        console.log("Small Size Items Successfully Added!");

        // Click Checkout
        ReactShopppingCartPage.clickCheckout();
    
        // Accept alert
        ReactShopppingCartPage.acceptAlert();

        // Print Checkout Successful
        console.log("Checkout Successful!");
    });

    it('I add the lowest price T-Shirt to my cart. Then, I checkout.', () => {

        // Open a new session
        ReactShopppingCartPage.reloadSession();
        
        // Open URL
        ReactShopppingCartPage.open();

        // Maximize window size
        ReactShopppingCartPage.maximizeWindow();

        // Verify if user is on React Shopping Cart Page
        var title = browser.getTitle();
        assert.equal(title, "React Shopping Cart");
        console.log("You are in React Shopping Cart Page");
       
        // Set order Lowest to Highest
        ReactShopppingCartPage.setLowesttoHighest();
        browser.pause(2000);

        // Add lowest priced t-shirt
        ReactShopppingCartPage.addLowestPricedTshirt();
        browser.pause(5000);
        console.log("Lowest Priced T-Shirt Successfully Added!");

         // Click Checkout
         ReactShopppingCartPage.clickCheckout();
    
         // Accept alert
         ReactShopppingCartPage.acceptAlert();
 
         // Print Checkout Successful
         console.log("Checkout Successful!");
    });

})