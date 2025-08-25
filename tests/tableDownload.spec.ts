import { test} from '@playwright/test';
// Update the import path to match the actual file location and name
import { TableDataDownloadActions } from '../pages/tableDataDownload/tableDataDownload.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("Table Download", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Table Data Download"); 

    let tableDataDownload = new TableDataDownloadActions(page);
    //await page.pause();
    await tableDataDownload.isTableDataDownloadHeadingVisible();
    await tableDataDownload.verifyCopyTableOption();
    await tableDataDownload.verifyCSVTableOption();
    await tableDataDownload.verifyExcelDownload();
});