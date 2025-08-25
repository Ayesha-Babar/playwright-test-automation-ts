import {Page,Locator} from '@playwright/test'
export class tableSortLocators{
    tableSortHeading:Locator;
    nameColoumnData:Locator;
    ageColumnData:Locator;
    nameSortType:Locator;
    ageSortType:Locator;
    searchField:Locator;
    tableFields:Locator;
    constructor(public page:Page){
        this.tableSortHeading = this.page.locator("//h1[text()='Table Sorting And Searching']");
        this.nameColoumnData = this.page.locator("//table[@id='example']//tbody//tr//td[1]");
        this.ageColumnData = this.page.locator("//table[@id='example']//tbody//tr//td[4]");
        this.nameSortType = this.page.locator("//th[contains(@aria-label,'Name: activate to sort')]");
        this.ageSortType = this.page.locator("//th[contains(@aria-label,'Age: activate to sort')]");
        this.searchField = this.page.locator("//input[@type='search']");
        this.tableFields = this.page.locator("//table//tbody//tr//td");


    }

}