import {Page,expect,Locator} from '@playwright/test'
export class shadowDomLocators{
   usernameField: Locator;
   emailField: Locator;
   passwordField: Locator;
   confirmPasswordField: Locator;
   submitButton: Locator;

    constructor(public page:Page){
    this.usernameField= this.page.locator('shadow-signup-form input[type="text"]');
    this.emailField = this.page.locator('shadow-signup-form input[type="email"]');
    this.passwordField = this.page.locator('shadow-signup-form input[name="password"]');
    this.confirmPasswordField = this.page.locator('shadow-signup-form input[name="confirm_password"]');
    this.submitButton = this.page.locator('shadow-signup-form button[type="button"]');

    }
}