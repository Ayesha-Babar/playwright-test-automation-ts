import { Page, expect } from '@playwright/test';
import { checkboxLocators } from './checkboxdemo.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class CheckboxDemoActions extends HomePageActions {
  private locators: checkboxLocators;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new checkboxLocators(page);
  }

  async isCheckboxDemoHeadingVisible(): Promise<boolean> {
    return await this.locators.checkBoxHeading.isVisible();
  }

  async checkFirstCheckbox() {
    await this.locators.firstCheckbox.click();
  }

  async verifyCheckingFirstCheckbox():Promise<Boolean>{
    await this.locators.firstCheckbox.click();
    return await this.locators.checkedMessage.isVisible();
  }

  async verifyDisabledCheckbox(){
    await expect(this.locators.disabledCheckbox).toBeDisabled();
  }

  async verifyCheckingMultipleCheckboxes(){
    await this.locators.checkAllButton.click();
    const count = await this.locators.multipleCheckboxes.count();
    for (let i = 0; i < count; i++) {
        expect(await this.locators.multipleCheckboxes.nth(i).isChecked()).toBe(true);
    }
  }

  async verifyUncheckingMultipleCheckboxes(){
    await this.locators.uncheckAllButton.click();
    const count = await this.locators.multipleCheckboxes.count();
    for (let i = 0; i < count; i++) {
        expect(await this.locators.multipleCheckboxes.nth(i).isChecked()).toBe(false);
    }
  }
}
