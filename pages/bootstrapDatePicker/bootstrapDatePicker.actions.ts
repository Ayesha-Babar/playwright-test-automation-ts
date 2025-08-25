import { Page, expect } from '@playwright/test';
import { HomePageActions } from '../homePage/homePage.actions';
import { bootstrapDatePickerLocators } from './bootstrapDatePicker.locators';

export class BootstrapDatePickerActions extends HomePageActions {
  private locators: bootstrapDatePickerLocators;
  protected message: string;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new bootstrapDatePickerLocators(page);
    this.message = '';
  }

  async isBootstrapDatePickerHeadingVisible(): Promise<boolean> {
    await this.waitForPageToLoad();
    return await this.locators.bootstrapDatePickerHeading.isVisible();
  }

  async selectBirthday(date: string): Promise<void> {
    await this.waitForPageToLoad();
    await this.locators.birthdayInputField.fill(date);
  }
}