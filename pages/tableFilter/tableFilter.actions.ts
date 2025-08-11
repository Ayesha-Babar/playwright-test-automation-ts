import { Page, expect } from '@playwright/test';
import {tableFilterLocators } from './tableFilter.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class TableFilterActions extends HomePageActions {
  private locators:tableFilterLocators;

  constructor(page: Page) {
    super(page); 
    this.locators = new tableFilterLocators(page);
  }

  async isTableFilterHeadingVisible(): Promise<boolean> {
    return this.locators.tableFilterHeading.isVisible();
  }

  async verifyFilterButton(button:string){
    if(button === "Cypress Testing"){
      await this.locators.cypressButton.click();
      expect( this.locators.filteredResults).toContainText(button); 
    } else if(button === "HyperExecute"){
      await this.locators.hyperExecuteButton.click();
      expect(this.locators.filteredResults.first()).toContainText(button);
    } else if(button === "Selenium Testing"){
      await this.locators.seleniumButton.click();
      expect( this.locators.filteredResults.first()).toContainText(button);
    } 
  }
}