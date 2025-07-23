import { Page, Locator } from '@playwright/test';

export class SimpleFormLocators {
  simpleFormDemoHeading: Locator;
  messageInput: Locator;
  getCheckedValueButton: Locator;
  messageOutput: Locator;
  constructor(private page: Page) {
    this.simpleFormDemoHeading = this.page.locator('//h1[text()="Simple Form Demo"]');
    this.messageInput = this.page.locator('//input[@id="user-message"]');
    this.getCheckedValueButton = this.page.locator('//button[@id="showInput"]');
    this.messageOutput = this.page.locator('#message');
  }

   
}

