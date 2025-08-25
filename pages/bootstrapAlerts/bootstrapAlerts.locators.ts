import { Page, Locator } from '@playwright/test';
export class bootstrapAlertsLocators {
  bootstrapAlertsHeading: Locator;
  autoclosableSuccessMessageButton:Locator;
  autoclosableInfoMessageButton:Locator;
  normalSuccessMessageButton:Locator;
  normalInfoMessageButton:Locator;
  autocloseableSuccessMessageAlert: Locator;
  normalSuccessMessageAlert:Locator;
  autocloseableInfoMessageAlert:Locator;
  normalInfoMessageAlert:Locator;
  alertCloseButton: Locator;
  constructor(private page: Page) {
    this.bootstrapAlertsHeading = this.page.locator('//h1[text()="Bootstrap Alert Messages"]');
    this.autoclosableSuccessMessageButton = this.page.locator('//button[text()="Autoclosable Success Message"]');
    this.autoclosableInfoMessageButton = this.page.locator('//button[text()="Autoclosable Info Message"]');
    this.normalSuccessMessageButton = this.page.locator('//button[text()="Normal Success Message"]');
    this.normalInfoMessageButton = this.page.locator('//button[text()="Normal Info Message"]');
    this.autocloseableSuccessMessageAlert = this.page.locator("//div[text()='Autocloseable success message. Hide in 5 seconds.']");
    this.normalSuccessMessageAlert = this.page.locator("//div[text()='Normal success message. To close use the close button.']");
    this.alertCloseButton = this.page.locator("//a[@aria-label='close']");
    this.normalInfoMessageAlert = this.page.locator("//div[text()='Normal info message.To close use the close button.']");
    this.autocloseableInfoMessageAlert = this.page.locator("//div[text()='Autocloseable info message. Hide in 5 seconds.']");
  }


   
}