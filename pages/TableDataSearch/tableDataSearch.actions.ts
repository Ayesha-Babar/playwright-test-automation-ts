import { Page, expect } from '@playwright/test';
import {tableDataSearchLocators } from './tableDataSearch.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class TableDataSearchActions extends HomePageActions {
  private locators: tableDataSearchLocators;

  constructor(page: Page) {
    super(page); 
    this.locators = new tableDataSearchLocators(page);
  }

  async isTableDataSearchHeadingVisible(): Promise<boolean> {
    return this.locators.tableDataSearchheading.isVisible();
  }
   async enterSearchText(searchText: string) {
    await this.locators.tableSearchField.fill(searchText);
  }

  async verifySearchResults(searchstring:string) {
    // Count rows
    const rows = await this.locators.tableSearchResults.count();
    console.log(rows);
    // Verify if any row contains the search string
    for (let i = 0; i < rows; i++) {
      const rowText = await this.locators.tableSearchResults.nth(i).innerText();
      if (rowText.includes(searchstring)) {
        return true;
      }
    }
    return false;
  }

  async verifyTableFilterResults(id:string){
    await this.waitForPageToLoad()
    await this.locators.tableFilterButton.click();
    await this.locators.tableFilterIdField.click();
    await this.locators.tableFilterIdField.fill(id);
    const count = await this.locators.tableFilteredResults.count();
    for(let i = 0; i < count; i++) {
      const cellText = await this.locators.tableFilteredResults.nth(i).innerText();
      if (cellText === id) {
        return true;
      }
    }
    return false;
  }
}

