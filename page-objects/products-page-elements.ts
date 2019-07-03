import {element, by} from "protractor";

export class productsPagePE
{
    public static productsList          = element(by.css("ul[class='product_list grid row']"));
    public static productHover          = element(by.css("ul[class='product_list grid row'] > li"));
    public static addToCartButton       = element(by.css("a[title='Add to cart']"));
    public static gridViewLink          = element(by.css("i[class='icon-th-large']"));
    public static blouseProductImage    = element(by.css("img[alt='Blouse']"));
    public static checkOutButton        = element(by.css("a[title='Proceed to checkout']"));
    public static noOfCartProducts      = element(by.css("span[class='ajax_cart_quantity']"));
    public static noProductsError       = element(by.css("p[class='alert alert-warning']"));
    public static wishlistButton        = element(by.css("a[title='Add to my wishlist']"));
    public static wishlistConfirm       = element(by.css("p[class='fancybox-error']"));
    public static closeButton           = element(by.css("a[title='Close']"));
    public static productView           = element(by.css("a[class='quick-view']"));
}