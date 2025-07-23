import { Locator, Page } from '@playwright/test';

class SimpleFormLocators {
  readonly page: Page;
    messageInput: Locator;
    showMessageButton: Locator;
    outputMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.messageInput = this.page.locator('#user-message');
    this.showMessageButton = this.page.locator('button:has-text("Show Message")');
    this.outputMessage = this.page.locator('#display');
  }

}

export default SimpleFormLocators;
