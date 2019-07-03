import {element, by} from "protractor";

export class loginPagePE
{
    public static emailAddressTextBox      = element(by.id("email"));
    public static passwordTextBox          = element(by.id("passwd"));
    public static submitButton             = element(by.id("SubmitLogin"));
}