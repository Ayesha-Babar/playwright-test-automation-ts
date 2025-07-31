import { Page, Locator } from '@playwright/test';

export class javascriptAlertsLocators {
    javascriptAlertsHeading: Locator;
    clickMeButtons: Locator
    constructor(private page: Page) {
    this.javascriptAlertsHeading = this.page.locator('//h1[text()="Javascript Alert Box Demo"]');
    this.clickMeButtons = this.page.locator("//button[text()='Click Me']");
    }
}