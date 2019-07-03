import {element, by} from "protractor";

export class homePagePE
{
    public static signInLink                = element(by.css("a[title='Log in to your customer account']"));
    public static womenHoverElement         = element(by.css("a[title='Women']"));
    public static blousesHoverElement       = element(by.css("a[title='Blouses']"));
    public static signoutLink               = element(by.css("a[title='Log me out']"));
    public static searchTextBox             = element(by.id("search_query_top"));
    public static searchButton              = element(by.css("button[name='submit_search']"));

}