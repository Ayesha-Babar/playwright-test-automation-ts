import { Locator, Page,expect } from '@playwright/test';
export class HomePageActions{
    protected message: string;
    
    constructor(protected page: Page) {}
      

    async waitForPageToLoad(): Promise<void> {
    await this.page.waitForLoadState('load'); // waits for full page load including styles, images, etc.
    }

    async navigateToHomePage(url:string) {
    await this.page.goto(url);
    }

  //dynamic method to create locators and click on them
    async clickLinks(linkText:string)
    {
      await this.waitForPageToLoad();
      const linklocator = this.page.locator(`//a[text()="${linkText}"]`);
      linklocator.click();
    }

  }
  


