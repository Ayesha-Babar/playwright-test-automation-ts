import { Page, expect } from '@playwright/test';
import { bootstrapProgressBarsLocators} from './bootstrapProgressBars.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class bootstrapProgressBarsActions extends HomePageActions {
  private locators: bootstrapProgressBarsLocators;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new bootstrapProgressBarsLocators(page);
  }

  async isBootstrapProgressBarHeadingVisible(): Promise<boolean> {
    return await this.locators.bootstrapProgressBarHeading.isVisible();
  }

  async clickStartDownloadButton(): Promise<void> {
    await this.locators.startDownloadButton.click();
  }

  async verifyProgressBarCompletion(): Promise<boolean> {
    const progressBarPercentage = await this.locators.progressBarPercentage.textContent();
    if(progressBarPercentage === "100%"){
        console.log(progressBarPercentage);
      await expect(this.locators.downloadMessage).toBeVisible();
      return true;
    }
    console.log(progressBarPercentage);
    return false;
  }
}
