import { loginPagePE } from "../page-objects/login-page-elements";
import { browser, element, by, ExpectedConditions, ElementFinder } from "protractor";
import { homePagePE } from "../page-objects/home-page-elements";
//import chai from "chai";
import { async } from "../node_modules/@types/q";
import { productsPagePE } from "../page-objects/products-page-elements";
//const using = require('jasmine-data-provider');
//import {testData} from "../test-data-files/testdata";

//Initialisations
let loginPage = new loginPagePE();
let homePage = new homePagePE();
let waitCondition = ExpectedConditions;
//var dataDriverObject = require("../test-data-files/testdata.js");

describe('ITC QA Test Automation Suite for Ecommerce application', ()=>{
    beforeEach(()=>{
        browser.manage().deleteAllCookies();
        browser.get(browser.params.url).then(async()=>{
            await browser.waitForAngularEnabled(false);
            //await browser.waitForAngular()
            await homePagePE.signInLink.click();
            await loginPagePE.emailAddressTextBox.sendKeys(browser.params.username);
            await loginPagePE.passwordTextBox.sendKeys(browser.params.password);
            await loginPagePE.submitButton.click();
            await browser.getTitle().then(async(homePageTitle)=>{
                expect(homePageTitle).toBe("My account - My Store");
            })
        })
    });
    //using(testData.addCaseNote, function(data, description){
        it('Adding a Product to cart ', async()=>{            
            await browser.actions().mouseMove(homePagePE.womenHoverElement).perform();
            await browser.wait(waitCondition.visibilityOf(homePagePE.blousesHoverElement), 5000).then(async(elementVisible)=>{
                await homePagePE.blousesHoverElement.click();
                await browser.wait(waitCondition.visibilityOf(productsPagePE.gridViewLink), 5000).then(async(elementSelect)=>{
                    await browser.actions().mouseMove(productsPagePE.blouseProductImage).perform();
                    await productsPagePE.addToCartButton.click();
                    browser.sleep(5000);
                    await productsPagePE.checkOutButton.click();
                    productsPagePE.noOfCartProducts.getText().then(async(noOfProducts)=>{
                        expect(noOfProducts).toBe("1");
                    })
                })
            })
        })
           
        it('Searching for a particular product', async()=>{
            await homePagePE.searchTextBox.sendKeys("T-shirts");
            await homePagePE.searchButton.click();
            await browser.sleep(5000);
            await productsPagePE.productsList.isDisplayed().then(async(productsDisplayed)=>{
                expect(productsDisplayed).toBe(true);
            })
        })

        it('Validating error message when products are not displayed - negative scenario', async()=>{
            await homePagePE.searchTextBox.sendKeys("Trousers");
            await homePagePE.searchButton.click();
            await browser.sleep(5000);
            await productsPagePE.noProductsError.getText().then(async(errorDisplayed)=>{
                expect(errorDisplayed).toContain("No results were found for your search");
            })
        })

        /*it('Adding a product to wishlist', async()=>{
            await homePagePE.searchTextBox.sendKeys("T-shirts");
            await homePagePE.searchButton.click();
            await productsPagePE.productsList.isDisplayed().then(async(productsDisplayed)=>{
                await browser.actions().mouseMove(productsPagePE.productHover).perform();
                await productsPagePE.productView.click();
                await browser.wait(waitCondition.elementToBeClickable(productsPagePE.wishlistButton),5000).then(async()=>{
                    await productsPagePE.wishlistButton.click();
                    await productsPagePE.wishlistConfirm.getText().then(async(wishlistMessage)=>{
                        expect(wishlistMessage).toEqual("Added to your wishlist.");
                        productsPagePE.closeButton.click();
                    })
                })
            })
        })*/

    afterEach(() =>{
        browser.wait(waitCondition.visibilityOf(homePagePE.signoutLink), 5000).then(async(signout)=>{
            homePagePE.signoutLink.click();
        })
    })
});

