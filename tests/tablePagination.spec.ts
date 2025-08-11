import { test,expect} from '@playwright/test';
// Update the import path to match the actual file location and name
import { TablePaginationActions } from '../pages/tablePagination/tablePagination.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("should enter a message and verify output", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Table Pagination"); 

    let tablePagination = new TablePaginationActions(page);
    await page.pause();
    expect(await tablePagination.isTablePaginationHeadingVisible()).toBeTruthy();
    await tablePagination.selectNoOfRows("10");
    await tablePagination.verifyRowCount(10);
    await tablePagination.verifyPagination(3,10);
});