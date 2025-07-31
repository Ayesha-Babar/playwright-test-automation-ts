import { Page, expect } from '@playwright/test';
import { ajaxFormSubmitLocators } from './ajaxFormSubmit.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class ajaxFormSubmitActions extends HomePageActions {
  private locators: ajaxFormSubmitLocators;
  
  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new ajaxFormSubmitLocators(page);  
  }

  async isAjaxFormSubmitHeadingVisible():Promise<boolean>{
    await this.waitForPageToLoad();
    return await this.locators.ajaxFormSubmitHeading.isVisible();
  }

  async enterName(name:string){
    await this.waitForPageToLoad();
    await this.locators.nameField.fill(name);
  }

  async enterMessage(message:string){
    await this.waitForPageToLoad();
    await this.locators.messageField.fill(message);
  }

  async clickSubmitButton(){
    await this.waitForPageToLoad();
    await this.locators.submitButton.click();
  }

  async isAjaxImageVisible():Promise<boolean>{
    await this.waitForPageToLoad();
    return await this.locators.ajaxImage.isVisible();
  }
}
 

