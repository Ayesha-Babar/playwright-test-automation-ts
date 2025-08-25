import { Page, Locator } from '@playwright/test';
export class bootstrapDatePickerLocators {
  bootstrapDatePickerHeading: Locator;
  birthdayInputField:Locator;


  constructor(private page: Page) {
    this.bootstrapDatePickerHeading = page.locator('//h1[text()="Bootstrap Date Pickers Demo"]');
    this.birthdayInputField = page.locator('//input[@type="date"]');
  }

   
}