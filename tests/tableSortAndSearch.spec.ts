import { test,expect} from '@playwright/test';
import { TableSortActions } from '../pages/tableSortAndSearch/tableSort.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';
test("should enter a message and verify output", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Table Sort & Search");
    await page.pause();
    const tableSort= new TableSortActions(page);
    await tableSort.isTableSortHeadingVisible();
    await tableSort.verifyNameSorting('ascending');
    await tableSort.verifyAgeSorting('descending');
    await tableSort.verifySearch("London");
});