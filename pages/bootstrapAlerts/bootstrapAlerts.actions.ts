import { Page, expect } from '@playwright/test';
import { bootstrapAlertsLocators } from './bootstrapAlerts.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class BootstrapAlertsActions extends HomePageActions {
  private locators: bootstrapAlertsLocators
  protected message: string;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new bootstrapAlertsLocators(page);
    this.message = '';
  }

  async isBootstrapAlertsHeadingVisible(): Promise<boolean> {
    await this.waitForPageToLoad();
    return await this.locators.bootstrapAlertsHeading.isVisible();
  }

  async verifyAutoclosableSuccessMessageOption(){
    await this.waitForPageToLoad();
    await this.locators.autoclosableSuccessMessageButton.click();
    await expect(this.locators.autocloseableSuccessMessageAlert).toBeVisible();
    //await expect(this.locators.autocloseableSuccessMessageAlert).toHaveText('Autocloseable success message. Hide in 5 seconds.');
    //verify if it disappears after 5secs
    await this.locators.autocloseableSuccessMessageAlert.waitFor({ state: 'detached', timeout: 6000 });
  }

  async verifyNormalSuccessMesageOption(){
    await this.waitForPageToLoad();
    await this.locators.normalSuccessMessageButton.click();
    expect(this.locators.normalSuccessMessageAlert).toBeVisible();
    expect(this.locators.normalSuccessMessageAlert).toContainText('Normal success message. To close use the close button.');
    await this.locators.alertCloseButton.nth(0).click();
  }

  async verifyAutoclosableInfoMessageOption(){
    await this.waitForPageToLoad()
    await this.locators.autoclosableInfoMessageButton.click();
    await expect( this.locators.autocloseableInfoMessageAlert).toBeVisible();
    await expect(this.locators.autocloseableInfoMessageAlert).toContainText('Autocloseable info message. Hide in 5 seconds.');
    await this.locators.autocloseableInfoMessageAlert.waitFor({ state: 'detached', timeout: 6000 });
  }

 async verifyNormalInfoMessageOption() {
    await this.waitForPageToLoad();
    await this.locators.normalInfoMessageButton.click();

    const alert = await this.locators.normalInfoMessageAlert;
    await expect(alert).toBeVisible();
    await expect(alert).toContainText('Normal info message.To close use the close button.');

    // Get the close button inside THIS alert
    const closeBtn = alert.locator('a[aria-label="close"]');

    await closeBtn.waitFor({ state: 'visible', timeout: 5000 });
    await closeBtn.click({ force: true });
}

}
