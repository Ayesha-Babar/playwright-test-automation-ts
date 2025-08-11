import {Page,Locator} from '@playwright/test'
export class tablePaginationLocators{
    tablePaginationHeading:Locator;
    rowDropdown:Locator;
    tableRows:Locator;
    idPerRow:Locator;

    constructor(public page:Page){
        this.tablePaginationHeading = this.page.locator("//h1[text()='Table Pagination Demo']");
        this.rowDropdown = this.page.locator("//select[@id='maxRows']");
        this.tableRows = this.page.locator("//table//tbody//tr[not(contains(@style,'display: none'))]");
        this.idPerRow = this.page.locator("//table//tbody//tr[not(contains(@style,'display: none'))]//td[1]");
        
    }

}
     