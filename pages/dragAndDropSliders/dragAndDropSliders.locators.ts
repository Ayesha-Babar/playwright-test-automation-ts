
import { Page, Locator } from '@playwright/test';

export class dragAndDropLocators {
  dragAndDropHeading: Locator;
  firstSlider: Locator;
  defaultValue: Locator
 
  constructor(private page: Page) {
    this.dragAndDropHeading = this.page.locator('//h1[text()="Slider Demo"]');
    this.firstSlider = this.page.locator('(//input[@class="sp__range"])[1]');
    this.defaultValue = this.page.locator('//output[@id="range"]');
 
  }
}