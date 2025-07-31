import { Page, expect } from '@playwright/test';
import { javascriptAlertsLocators } from './javascriptAlerts.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class javascriptAlertsActions extends HomePageActions {
  private locators: javascriptAlertsLocators;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new javascriptAlertsLocators(page);
  }
  async verifyJavascriptAlertsHeading() {
    await expect(this.locators.javascriptAlertsHeading).toBeVisible();
  }

 async verifyAlerts(alertOption: string) {
    const clickMeButtons = await this.locators.clickMeButtons.all();

    // Map alert type to button index
    const alertMap: Record<string, number> = {
        "javascript Alerts": 0, // First button
        "confirm Box": 1,       // Second button
        "prompt Box": 2         // Third button
    };

    // Select the correct button based on alertOption
    const buttonIndex = alertMap[alertOption];
    if (buttonIndex === undefined) {
        throw new Error(`Invalid alert option: ${alertOption}`);
    }

    // Handle the alert before clicking the button
    this.page.once('dialog', async dialog => {
        console.log('Alert message:', dialog.message());

        if (alertOption === "javascript Alerts") {
            expect(dialog.message()).toContain('I am an alert box!');
            await dialog.accept();
        } 
        else if (alertOption === "confirm Box") {
            expect(dialog.message()).toContain('Press a button!');
            await dialog.dismiss(); // Or accept()
        } 
        else if (alertOption === "prompt Box") {
            expect(dialog.message()).toContain('Please enter your name');
            await dialog.accept('Playwright TS'); // Enter text
        }
    });

    // Click the matching button
    await clickMeButtons[buttonIndex].click();
}
}

