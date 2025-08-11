import { test} from '@playwright/test';
// Update the import path to match the actual file location and name
import { TableFilterActions } from '../pages/tableFilter/tableFilter.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("should enter a message and verify output", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Table Filter"); 

    let tableFilter = new TableFilterActions(page);
    await page.pause();
    await tableFilter.isTableFilterHeadingVisible();
    await tableFilter.verifyFilterButton("Cypress Testing");
    await tableFilter.verifyFilterButton("HyperExecute");
    await tableFilter.verifyFilterButton("Selenium Testing");
    
});