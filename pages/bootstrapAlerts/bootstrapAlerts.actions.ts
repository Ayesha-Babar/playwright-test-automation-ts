import { Page, expect } from '@playwright/test';
import { bootstrapAlertsLocators } from './bootstrapAlerts.locators';
import { HomePageActions } from '../homePage/homePage.actions';
import assert from 'assert';

export class BootstrapAlertsActions extends HomePageActions {
  private locators: bootstrapAlertsLocators;
  protected message: string;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new bootstrapAlertsLocators(page);
    this.message = '';
  }

  async isBootstrapAlertsHeadingVisible(): Promise<boolean> {
    await this.waitForPageToLoad();
    return await this.locators.bootstrapDualListHeading.isVisible();
  }

  async getElementCountInLeftList(): Promise<number> {
    await this.waitForPageToLoad();
    return await this.locators.elementsListLeft.count();
  }

  async getElementCountInRightList(): Promise<number> {
    await this.waitForPageToLoad();
    return await this.locators.elementsListRight.count();
  }


  async moveElementLeft(NoOfTimes: number) {
    await this.waitForPageToLoad();

    for (let i = 0; i < NoOfTimes; i++) {
      await this.locators.targetList.nth(0).click();
      await this.locators.leftButton.click();
    }
  }

   async moveElementRight(NoOfTimes: number) {
    await this.waitForPageToLoad();

    for (let i = 0; i < NoOfTimes; i++) {
      await this.locators.sourceList.nth(0).click();
      await this.locators.rightButton.click();
    }
  }
}
