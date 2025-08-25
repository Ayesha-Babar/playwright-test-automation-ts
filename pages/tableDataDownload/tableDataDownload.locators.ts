import { Locator, Page } from "@playwright/test";

export class TableDataDownloadLocators {
    tableDataDownloadHeading:Locator;
    copyButton: Locator;
    csvButton:Locator;
    excelButton:Locator;
    alert:Locator;

  constructor(public page:Page){
    this.tableDataDownloadHeading = this.page.locator("//h1[text()='Data Table Download']");
    this.copyButton = this.page.locator("//a[@class='dt-button buttons-copy buttons-html5']");
    this.csvButton = this.page.locator("//a[@class='dt-button buttons-csv buttons-html5']");
    this.excelButton = this.page.locator("//a[@class='dt-button buttons-excel buttons-html5']");
    this.alert = this.page.locator("//div[text()='Copied 20 rows to clipboard']")
  }
}
