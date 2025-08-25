import { Page, expect } from '@playwright/test';
import {bootstrapListboxLocators } from './bootstrapListbox.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class BootstrapListboxActions extends HomePageActions {
  private locators: bootstrapListboxLocators;
  protected message: string;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new bootstrapListboxLocators(page);
    this.message = '';
  }

  async isBootstrapListboxHeadingVisible(): Promise<boolean> {
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
