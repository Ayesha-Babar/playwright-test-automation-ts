import { Page, expect } from '@playwright/test';
import {tableSortLocators } from './tableSort.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class TableSortActions extends HomePageActions {
  private locators:tableSortLocators;

  constructor(page: Page) {
    super(page); 
    this.locators = new tableSortLocators(page);
  }

  async isTableSortHeadingVisible(): Promise<boolean> {
    await this.waitForPageToLoad();
    return this.locators.tableSortHeading.isVisible();
  }

  async verifyNameSorting(order: 'ascending' | 'descending') {
  await this.waitForPageToLoad();

  // Detect current sort state
  let currentSort = await this.locators.nameSortType.getAttribute('aria-sort');

  // Click until desired sort state
  if (currentSort !== order) {
    await this.locators.nameSortType.click();
    currentSort = await this.locators.nameSortType.getAttribute('aria-sort');
    if (currentSort !== order) {
      await this.locators.nameSortType.click();
    }
  }

  // Now table should be in the correct order
  const actualData = await this.locators.nameColoumnData.allTextContents();

  const expectedSortedColumn =
    order === 'ascending'
      ? [...actualData].sort((a, b) => a.localeCompare(b))
      : [...actualData].sort((a, b) => b.localeCompare(a));

  await expect(actualData).toEqual(expectedSortedColumn);
}

async verifyAgeSorting(order: 'ascending' | 'descending') {
  await this.waitForPageToLoad();

  // Get current sort order
  let currentSort = await this.locators.ageSortType.getAttribute('aria-sort');

  // Click until we match desired order
  if (currentSort !== order) {
    await this.locators.ageSortType.click();
    currentSort = await this.locators.ageSortType.getAttribute('aria-sort');
    if (currentSort !== order) {
      await this.locators.ageSortType.click();
    }
  }

  // Fetch actual data after sorting
  const actualDataStrings = await this.locators.ageColumnData.allTextContents();
  const actualData = actualDataStrings.map(a => parseInt(a.trim(), 10));

  // Prepare expected sorted data
  const expectedSortedColumn =
    order === 'ascending'
      ? [...actualData].sort((a, b) => a - b)
      : [...actualData].sort((a, b) => b - a);

  await expect(actualData).toEqual(expectedSortedColumn);
}

async verifySearch(searchString:string){
    await this.locators.searchField.fill(searchString);
    const count =await this.locators.tableFields.count();
    for(let i=0;i<count;i++){
        const cellText = await this.locators.tableFields.nth(i).innerText();
        if(cellText.includes(searchString)){
            return true;
        }
    }
   return false;
}
}