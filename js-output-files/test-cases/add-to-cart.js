"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_page_elements_1 = require("../page-objects/login-page-elements");
const protractor_1 = require("protractor");
const home_page_elements_1 = require("../page-objects/home-page-elements");
const products_page_elements_1 = require("../page-objects/products-page-elements");
//const using = require('jasmine-data-provider');
//import {testData} from "../test-data-files/testdata";
//Initialisations
let loginPage = new login_page_elements_1.loginPagePE();
let homePage = new home_page_elements_1.homePagePE();
let waitCondition = protractor_1.ExpectedConditions;
//var dataDriverObject = require("../test-data-files/testdata.js");
describe('ITC QA Test Automation Suite for Ecommerce application', () => {
    beforeEach(() => {
        protractor_1.browser.manage().deleteAllCookies();
        protractor_1.browser.get(protractor_1.browser.params.url).then(() => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            //await browser.waitForAngular()
            yield home_page_elements_1.homePagePE.signInLink.click();
            yield login_page_elements_1.loginPagePE.emailAddressTextBox.sendKeys(protractor_1.browser.params.username);
            yield login_page_elements_1.loginPagePE.passwordTextBox.sendKeys(protractor_1.browser.params.password);
            yield login_page_elements_1.loginPagePE.submitButton.click();
            yield protractor_1.browser.getTitle().then((homePageTitle) => __awaiter(this, void 0, void 0, function* () {
                expect(homePageTitle).toBe("My account - My Store");
            }));
        }));
    });
    //using(testData.addCaseNote, function(data, description){
    it('Adding a Product to cart ', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.actions().mouseMove(home_page_elements_1.homePagePE.womenHoverElement).perform();
        yield protractor_1.browser.wait(waitCondition.visibilityOf(home_page_elements_1.homePagePE.blousesHoverElement), 5000).then((elementVisible) => __awaiter(this, void 0, void 0, function* () {
            yield home_page_elements_1.homePagePE.blousesHoverElement.click();
            yield protractor_1.browser.wait(waitCondition.visibilityOf(products_page_elements_1.productsPagePE.gridViewLink), 5000).then((elementSelect) => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.actions().mouseMove(products_page_elements_1.productsPagePE.blouseProductImage).perform();
                yield products_page_elements_1.productsPagePE.addToCartButton.click();
                protractor_1.browser.sleep(5000);
                yield products_page_elements_1.productsPagePE.checkOutButton.click();
                products_page_elements_1.productsPagePE.noOfCartProducts.getText().then((noOfProducts) => __awaiter(this, void 0, void 0, function* () {
                    expect(noOfProducts).toBe("1");
                }));
            }));
        }));
    }));
    it('Searching for a particular product', () => __awaiter(this, void 0, void 0, function* () {
        yield home_page_elements_1.homePagePE.searchTextBox.sendKeys("T-shirts");
        yield home_page_elements_1.homePagePE.searchButton.click();
        yield protractor_1.browser.sleep(5000);
        yield products_page_elements_1.productsPagePE.productsList.isDisplayed().then((productsDisplayed) => __awaiter(this, void 0, void 0, function* () {
            expect(productsDisplayed).toBe(true);
        }));
    }));
    it('Validating error message when products are not displayed - negative scenario', () => __awaiter(this, void 0, void 0, function* () {
        yield home_page_elements_1.homePagePE.searchTextBox.sendKeys("Trousers");
        yield home_page_elements_1.homePagePE.searchButton.click();
        yield protractor_1.browser.sleep(5000);
        yield products_page_elements_1.productsPagePE.noProductsError.getText().then((errorDisplayed) => __awaiter(this, void 0, void 0, function* () {
            expect(errorDisplayed).toContain("No results were found for your search");
        }));
    }));
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
    afterEach(() => {
        protractor_1.browser.wait(waitCondition.visibilityOf(home_page_elements_1.homePagePE.signoutLink), 5000).then((signout) => __awaiter(this, void 0, void 0, function* () {
            home_page_elements_1.homePagePE.signoutLink.click();
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0LWNhc2VzL2FkZC10by1jYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2RUFBa0U7QUFDbEUsMkNBQXFGO0FBQ3JGLDJFQUFnRTtBQUdoRSxtRkFBd0U7QUFDeEUsaURBQWlEO0FBQ2pELHVEQUF1RDtBQUV2RCxpQkFBaUI7QUFDakIsSUFBSSxTQUFTLEdBQUcsSUFBSSxpQ0FBVyxFQUFFLENBQUM7QUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSwrQkFBVSxFQUFFLENBQUM7QUFDaEMsSUFBSSxhQUFhLEdBQUcsK0JBQWtCLENBQUM7QUFDdkMsbUVBQW1FO0FBRW5FLFFBQVEsQ0FBQyx3REFBd0QsRUFBRSxHQUFFLEVBQUU7SUFDbkUsVUFBVSxDQUFDLEdBQUUsRUFBRTtRQUNYLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNwQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBTyxFQUFFO1lBQzFDLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxnQ0FBZ0M7WUFDaEMsTUFBTSwrQkFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQyxNQUFNLGlDQUFXLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0saUNBQVcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0saUNBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElB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