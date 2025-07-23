import { Page, expect } from '@playwright/test';
import { SimpleFormLocators } from './simpleFormDemo.locators';
import { HomePageActions } from './homePage/homePage.actions';

export class SimpleFormDemoActions extends HomePageActions {
  private locators: SimpleFormLocators;
  protected message: string;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new SimpleFormLocators(page);
    this.message = '';
  }

  async isSimpleFormDemoHeadingVisible(): Promise<boolean> {
    await this.waitForPageToLoad();
    return await this.locators.simpleFormDemoHeading.isVisible();
  }

  async fillMessageInput(message: string): Promise<void> {
    await this.waitForPageToLoad();
    await this.locators.messageInput.fill(message);
  }

  async clickGetCheckedValueButton(): Promise<void> {
    await this.waitForPageToLoad();
    await this.locators.getCheckedValueButton.click();
  }

  async verifyMessageOutputText(message: string): Promise<void> {
    await this.waitForPageToLoad();
    const messageOutput = await this.locators.messageOutput.textContent();
    await expect(messageOutput?.trim()).toBe(message);
  }
}