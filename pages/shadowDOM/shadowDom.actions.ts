import { Page, expect } from '@playwright/test';
import { shadowDomLocators } from './shadowDom.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class shadowDomActions extends HomePageActions {
  private locators: shadowDomLocators;

  constructor(page: Page) {
    super(page); 
    this.locators = new shadowDomLocators(page);
  }

  async enterUserName(){
    await this.waitForPageToLoad();
    await this.locators.usernameField.fill('testuser');
  }

  async enterEmail(){
    await this.waitForPageToLoad();
    await this.locators.emailField.fill('testuser@example.com');
  }

  async enterPassword(){
    await this.waitForPageToLoad();
    await this.locators.passwordField.fill('password123');
  }

  async enterConfirmPassword(){
    await this.waitForPageToLoad();
    await this.locators.confirmPasswordField.fill('password123');
  }

  async clickSubmitButton(){
    await this.waitForPageToLoad();
    await this.locators.submitButton.click();
  }
}
