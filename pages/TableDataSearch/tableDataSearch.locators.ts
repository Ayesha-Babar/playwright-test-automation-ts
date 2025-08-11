import {Page,Locator} from '@playwright/test'
export class tableDataSearchLocators{
   tableDataSearchheading:Locator;
   tableSearchField:Locator;
   tableFilterButton:Locator;
   tableFilteredResults:Locator;
   tableSearchResults:Locator;
   tableFilterIdField:Locator;
   

    constructor(public page:Page){
        this.tableDataSearchheading = this.page.locator("//h1[text()='Table Search filter']");
        this.tableSearchField = this.page.locator("#task-table-filter");
        this.tableSearchResults = this.page.locator("//table[@id='task-table']//tbody//tr//td");
        this.tableFilteredResults = this.page.locator("(//table[@class='table table-hover table-responsive'])[2]//tbody//tr//td[1]");
        this.tableFilterIdField= this.page.locator("//input[@placeholder='#']");
        this.tableFilterButton = this.page.locator("//button[text()='Filter']");
    }
}
    