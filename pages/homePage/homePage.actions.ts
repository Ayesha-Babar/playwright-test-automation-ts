import { Page,expect } from '@playwright/test';
import { HomePageLocators } from './homePage.locators';
export class HomePageActions{
    private locator: HomePageLocators;
    protected message: string;
    
    constructor(private page: Page) {
      this.locator= new HomePageLocators(page);
    }

    async waitForPageToLoad(): Promise<void> {
    await this.page.waitForLoadState('load'); // waits for full page load including styles, images, etc.
    }


    async navigateToHomePage(url:string) {
    await this.page.goto(url);
    }

    async clickSimpleFormDemoLink(){
      await this.locator.simpleFormDemo.click();
    }
  }
  


