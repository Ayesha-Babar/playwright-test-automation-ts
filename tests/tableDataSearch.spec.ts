import { test} from '@playwright/test';
import { TableDataSearchActions } from '../pages/TableDataSearch/tableDataSearch.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("Table Data Search", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Table Data Search"); 

    let tableDataSearch = new TableDataSearchActions(page);
    await page.pause();
    await tableDataSearch.isTableDataSearchHeadingVisible();
    await tableDataSearch.enterSearchText("completed");
    await tableDataSearch.verifySearchResults("completed");
    await tableDataSearch.verifyTableFilterResults("1");
});