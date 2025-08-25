import { Page, expect } from '@playwright/test';
import {TableDataDownloadLocators} from './tableDataDownload.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class TableDataDownloadActions extends HomePageActions {
  private locators: TableDataDownloadLocators;

  constructor(page: Page) {
    super(page); 
    this.locators = new TableDataDownloadLocators(page);
  }

  async isTableDataDownloadHeadingVisible(): Promise<boolean> {
    return this.locators.tableDataDownloadHeading.isVisible();
  }

  async verifyCopyTableOption(){
    await this.waitForPageToLoad();
    await this.locators.copyButton.click();
    expect(await this.locators.alert).toBeVisible({timeout:3000});
  }

  //using network tab
  async verifyCSVTableOption(){
    await this.waitForPageToLoad();
    const [fbRequest] = await Promise.all([
    this.page.waitForRequest(req =>
    req.url().includes('facebook') // Looser filter
  ),
  this.locators.csvButton.click()
]);

    expect(fbRequest.url()).toContain('facebook');
  }
 
  //using promise
  async verifyExcelDownload() {
      const [download] = await Promise.all([
    this.page.waitForEvent('download'),
    await this.locators.excelButton.click()
  ]);

  // Save and check content
  const path = await download.path();
  const content = await download.createReadStream();
  let data = '';
  for await (const chunk of content) {
    data += chunk.toString();
  }
  console.log(data);

  expect(data).toContain('First Name'); // Example: CSV header check
  }
}