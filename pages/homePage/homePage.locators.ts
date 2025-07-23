import { Page,Locator } from '@playwright/test';
export class HomePageLocators{
    simpleFormDemo: Locator;
    constructor(private page: Page) {
    this.simpleFormDemo = this.page.locator("//a[text()='Simple Form Demo']");
    }

    
}
