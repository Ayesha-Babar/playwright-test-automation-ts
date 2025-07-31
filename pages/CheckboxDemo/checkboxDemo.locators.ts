
import { Page, Locator } from '@playwright/test';

export class checkboxLocators {
  checkBoxHeading: Locator;
  firstCheckbox: Locator;
  checkedMessage: Locator;
  disabledCheckbox: Locator;
  checkAllButton: Locator;
  uncheckAllButton: Locator;
  multipleCheckboxes: Locator
  constructor(private page: Page) {
    this.checkBoxHeading = this.page.locator('//h1[text()="Checkbox Demo"]');
    this.firstCheckbox = this.page.locator('(//input[@type="checkbox"])[1]');
    this.checkedMessage = this.page.locator('//p[text()="Checked!"]');
    this.disabledCheckbox = this.page.locator('(//input[@type="checkbox"])[4]');
    this.multipleCheckboxes = this.page.locator("//div[@class='flex gap-30 flex-wrap']//label//input[@type='checkbox']")
    this.checkAllButton = this.page.locator("//button[text()='Check All']");
    this.uncheckAllButton = this.page.locator("//button[text()='Uncheck All']");
  }
}