import { Page, Locator } from '@playwright/test';

export class bootstrapProgressBarsLocators {
  bootstrapProgressBarHeading: Locator;
  startDownloadButton:Locator;
  progressBarPercentage:Locator;
  downloadMessage:Locator;
  
  constructor(private page: Page) {
    this.bootstrapProgressBarHeading = this.page.locator('//h1[text()="Bootstrap Progress Bars"]');
    this.startDownloadButton = this.page.locator('//button[text()="Start Download"]');
    this.progressBarPercentage = this.page.locator("//div[@class='progress']//p");
    this.downloadMessage = this.page.locator("//p[@class='success text-green-100 mb-10']");

  }

}