"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class productsPagePE {
}
productsPagePE.productsList = protractor_1.element(protractor_1.by.css("ul[class='product_list grid row']"));
productsPagePE.productHover = protractor_1.element(protractor_1.by.css("ul[class='product_list grid row'] > li"));
productsPagePE.addToCartButton = protractor_1.element(protractor_1.by.css("a[title='Add to cart']"));
productsPagePE.gridViewLink = protractor_1.element(protractor_1.by.css("i[class='icon-th-large']"));
productsPagePE.blouseProductImage = protractor_1.element(protractor_1.by.css("img[alt='Blouse']"));
productsPagePE.checkOutButton = protractor_1.element(protractor_1.by.css("a[title='Proceed to checkout']"));
productsPagePE.noOfCartProducts = protractor_1.element(protractor_1.by.css("span[class='ajax_cart_quantity']"));
productsPagePE.noProductsError = protractor_1.element(protractor_1.by.css("p[class='alert alert-warning']"));
productsPagePE.wishlistButton = protractor_1.element(protractor_1.by.css("a[title='Add to my wishlist']"));
productsPagePE.wishlistConfirm = protractor_1.element(protractor_1.by.css("p[class='fancybox-error']"));
productsPagePE.closeButton = protractor_1.element(protractor_1.by.css("a[title='Close']"));
productsPagePE.productView = protractor_1.element(protractor_1.by.css("a[class='quick-view']"));
exports.productsPagePE = productsPagePE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtcGFnZS1lbGVtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2Utb2JqZWN0cy9wcm9kdWN0cy1wYWdlLWVsZW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXVDO0FBRXZDLE1BQWEsY0FBYzs7QUFFVCwyQkFBWSxHQUFZLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7QUFDN0UsMkJBQVksR0FBWSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLDhCQUFlLEdBQVMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUNsRSwyQkFBWSxHQUFZLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7QUFDcEUsaUNBQWtCLEdBQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM3RCw2QkFBYyxHQUFVLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7QUFDMUUsK0JBQWdCLEdBQVEsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUM1RSw4QkFBZSxHQUFTLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7QUFDMUUsNkJBQWMsR0FBVSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLDhCQUFlLEdBQVMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztBQUNyRSwwQkFBVyxHQUFhLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDNUQsMEJBQVcsR0FBYSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0FBYm5GLHdDQWNDIn0=