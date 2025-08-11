import { Page, expect } from '@playwright/test';
import { progressBarModalLocators } from './progresBarModal.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class progressBarModalActions extends HomePageActions {
  private locators: progressBarModalLocators;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new progressBarModalLocators(page);
  }

  async verifyProgressBarHeading() {
    await this.waitForPageToLoad();
    await expect(this.locators.progressBarModalHeading).toBeVisible();
  }

  async VerifyClickingOnShowModalForSecondsButton(seconds:string){
    await this.waitForPageToLoad();
    
    const start = Date.now();
    switch(seconds) {
      case 'twoSeconds':
        await this.locators.showDialogButtonTwoSeconds.click();
        // Wait for modal to open
        await this.page.waitForFunction(() => document.body.classList.contains('modal-open'));
        // Wait for modal to close
        await this.page.waitForFunction(() => !document.body.classList.contains('modal-open'));
        let elapsedtwo = (Date.now() - start) / 1000;
        console.log(`Modal was visible for ~${elapsedtwo} seconds`);
        expect(elapsedtwo).toBeLessThanOrEqual(3);
        break;
      case 'threeSeconds':
        await this.locators.showDialogButtonThreeSeconds.click();
        await this.page.waitForFunction(() => document.body.classList.contains('modal-open'));
        await this.page.waitForFunction(() => !document.body.classList.contains('modal-open'));
        let elapsedthree = (Date.now() - start) / 1000;
        console.log(`Modal was visible for ~${elapsedthree} seconds`);
        expect(elapsedthree).toBeLessThanOrEqual(4);
        break;
      case 'fiveSeconds':
        await this.locators.showDialogButtonFiveSeconds.click();
        await this.page.waitForFunction(() => document.body.classList.contains('modal-open'));
        await this.page.waitForFunction(() => !document.body.classList.contains('modal-open'));
        let elapsedfive = (Date.now() - start) / 1000;
        console.log(`Modal was visible for ~${elapsedfive} seconds`);
        expect(elapsedfive).toBeLessThanOrEqual(6);
        break;

      case 'default':
        throw new Error(`Unknown duration: ${seconds}`);
    }
    

  }
}
