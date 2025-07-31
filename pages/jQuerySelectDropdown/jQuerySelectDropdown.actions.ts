import { Page, expect } from '@playwright/test';
import { jQuerySelectDropdownLocators } from './jQuerySelectDropdown.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class jQuerySelectDropdownActions extends HomePageActions {
  private locators: jQuerySelectDropdownLocators;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new jQuerySelectDropdownLocators(page);
  }

  async verifyJquerySelectDropdownHeading() {
    await this.waitForPageToLoad();
    await expect(this.locators.jQuerySelectDropdownHeading).toBeVisible();
  }

  async selectOptionFromDropdownWithSearch(){
    await this.waitForPageToLoad();
    await this.locators.countryDropdown.nth(0).click();
    await this.locators.countrySearchField.fill("australia");
    await this.page.keyboard.press('Enter');
  }

  async selectMultipleOptions(){
    await this.waitForPageToLoad();
    const multipleValuesDropdown = this.locators.multipleValuesDropdown;
    await multipleValuesDropdown.click()
   await this.locators.multipleValuesDropdown.selectOption(['Alabama', 'Alaska']);
  }

  async verifyDisabledOptions(){
    await this.waitForPageToLoad();
    await this.locators.disabledValuesDropdown.click();
    await expect(this.locators.disabledOption).toBeDisabled();
  }

  async selectMultipleCategoryDropdown(){
    await this.waitForPageToLoad();
    await this.locators.multipleValuesDropdown.click();
    await this.locators.multipleValuesDropdown.selectOption('PHP');

  }
}