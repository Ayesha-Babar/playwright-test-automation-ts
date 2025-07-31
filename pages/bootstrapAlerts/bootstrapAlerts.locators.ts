import { Page, Locator } from '@playwright/test';
export class bootstrapAlertsLocators {
  bootstrapDualListHeading: Locator;
  elementsListLeft: Locator;
  elementsListRight: Locator;
  sourceList: Locator;
  targetList: Locator;
  rightButton: Locator;
  leftButton: Locator;
  constructor(private page: Page) {
    this.bootstrapDualListHeading = this.page.locator('//h1[text()="Bootstrap Dual List Demo"]');
    this.elementsListLeft = this.page.locator('(//ul[@class="list-group sp_list_group mb-20 mt-10"])[1]//li');
    this.elementsListRight = this.page.locator('(//ul[@class="list-group sp_list_group mb-20 mt-10"])[2]//li');
    this.sourceList = this.page.locator('//ul[@class="list-group sp_list_group mb-20 mt-10"]').nth(0);
    this.targetList = this.page.locator('//ul[@class="list-group sp_list_group mb-20 mt-10"]').nth(1);
    this.rightButton = this.page.locator("//div[@class='list-arrows w-2/12 text-center']//button").nth(1);
    this.leftButton = this.page.locator("//div[@class='list-arrows w-2/12 text-center']//button").nth(0);
  }

   
}