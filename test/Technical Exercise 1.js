const assert = require('assert');

describe('Test Checkout Small Sizes', () => {
    it('I open above website and I add all the Small T-Shirts to my cart. Then, I checkout.', () => {

        // Open URL
        browser.url('https://react-shopping-cart-67954.firebaseapp.com/');

        // Maximize window size
        browser.maximizeWindow();

        // Verify if user is on React Shopping Cart Page
        var title = browser.getTitle();
        assert.equal(title, "React Shopping Cart");
        console.log("You are in React Shopping Cart Page");
        
        // Click Small Size
        var small = $('div:nth-child(3) > label > span');
        small.click();
        
        // Select first item
        var addtocart1= $('div:nth-child(2) > div.shelf-item__buy-btn');
        addtocart1.click();
        
        // Select second item
        var addtocart2= $('div:nth-child(3) > div.shelf-item__buy-btn');
        addtocart2.click();

        // Click Checkout
        var checkout = $('div.buy-btn');
        checkout.click();
    
        // Accept alert
        browser.acceptAlert();

        // Print Checkout Successful
        console.log("Checkout Successful!");
    });

    it('I add the lowest price T-Shirt to my cart. Then, I checkout.', () => {

        // Open a new session
        browser.reloadSession();


        
        // Open URL
        browser.url('https://react-shopping-cart-67954.firebaseapp.com/');

        // Maximize window size
        browser.maximizeWindow();

        // Verify if user is on React Shopping Cart Page
        var title = browser.getTitle();
        assert.equal(title, "React Shopping Cart");
        console.log("You are in React Shopping Cart Page");
       
        // Set order Lowest to Highest
        $("div > select").selectByVisibleText("Lowest to highest");

        // Add smallest item to cart
        var addtocartsmallest= $('div:nth-child(2) > div.shelf-item__buy-btn');
        addtocartsmallest.click();

        // Click Checkout
        var checkout = $('div.buy-btn');
        checkout.click();

        // Accept alert
        browser.acceptAlert();

        // Print Checkout Successful
        console.log("Checkout Successful!")
    })
   
});