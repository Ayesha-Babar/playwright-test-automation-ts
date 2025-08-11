import { Page, expect } from '@playwright/test';
import {tablePaginationLocators } from './tablePagination.locators';
import { HomePageActions } from '../homePage/homePage.actions';
import { tableFilterLocators } from '../tableFilter/tableFilter.locators';

export class TablePaginationActions extends HomePageActions {
  private locators:tablePaginationLocators;

  constructor(page: Page) {
    super(page); 
    this.locators = new tablePaginationLocators(page);
  }

  async isTablePaginationHeadingVisible(): Promise<boolean> {
    await this.waitForPageToLoad();
    return this.locators.tablePaginationHeading.isVisible();
  }

  async selectNoOfRows(value: string): Promise<void> {
    await this.waitForPageToLoad();
    await this.locators.rowDropdown.selectOption(value);
  }
  async verifyRowCount(count: number): Promise<void> {
    await this.waitForPageToLoad();
    await expect(this.locators.tableRows).toHaveCount(count);
  }

  async verifyPagination(PageNo:number,rowNoPerPage:number,totalRows=40){
    await this.waitForPageToLoad();
    const paginationSelector = this.page.locator(`//li[@data-page='${PageNo}']//span[text()='${PageNo}']`);
    await paginationSelector.click();
     const startID = (PageNo - 1) * rowNoPerPage + 1;
     console.log("start id is",startID);
     let endID = PageNo * rowNoPerPage;
     console.log("end id is ",endID);
     if (endID > totalRows) {endID = totalRows;}
     const ids = await this.locators.idPerRow.allTextContents();
     console.log("actual ids are",ids);
     const idsAsNumbers = ids.map(id => parseInt(id.trim(), 10));
     console.log("ids as numbers",idsAsNumbers);
     const expectedIDs = Array.from({ length: endID - startID + 1 }, (_, i) => startID + i);
     console.log("expected ids are",expectedIDs);
    if (JSON.stringify(idsAsNumbers) !== JSON.stringify(expectedIDs)) {
    throw new Error(`Mismatch! Expected: ${expectedIDs}, Found: ${idsAsNumbers}`);
  }
  
  console.log(`Page ${PageNo} with ${rowNoPerPage} rows/page is correct`);
  }


}