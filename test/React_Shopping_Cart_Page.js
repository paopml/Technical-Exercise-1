class ReactShopppingCartPage{

    get small() { return $('div:nth-child(3) > label > span') }
    get checkout() { return $('div.buy-btn');}
    get smallSizes() { return $$('(.//div[@class="shelf-item__buy-btn"])');}
    get dropdown() { return $("div > select");}
    get smallestItem() {return $('div:nth-child(2) > div.shelf-item__buy-btn');}
    
    open(){
        browser.url('https://react-shopping-cart-67954.firebaseapp.com/');
    }
    clickSmallSize(){
        this.small.click();
    }
    maximizeWindow() {
        browser.maximizeWindow();
      }
    selectSmallSizeItems() {
        this.smallSizes.map(selectedElement=>selectedElement.click());
    }
  
    clickCheckout(){
        this.checkout.click();
    }
    acceptAlert(){
        browser.acceptAlert();
    }
    reloadSession(){
        browser.reloadSession();
    }
    setLowesttoHighest(){
        this.dropdown.selectByVisibleText("Lowest to highest");
    }
    addLowestPricedTshirt(){
        this.smallestItem.click();
    }
}

module.exports = new ReactShopppingCartPage();
