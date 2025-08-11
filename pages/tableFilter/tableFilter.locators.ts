import {Page,Locator} from '@playwright/test'
export class tableFilterLocators{
    tableFilterHeading:Locator;
    hyperExecuteButton:Locator;
    seleniumButton:Locator;
    cypressButton:Locator;
    AllButton:Locator;
    filteredResults:Locator;

    constructor(public page:Page){
        this.tableFilterHeading = this.page.locator("//h1[text()='Table Filter Demo']");
        this.cypressButton = this.page.locator("//button[text()='Cypress Testing']");
        this.hyperExecuteButton = this.page.locator("//button[text()='HyperExecute']");
        this.seleniumButton = this.page.locator("//button[text()='Selenium Testing']");
        this.filteredResults = this.page.locator("//table//tr[not(contains(@style,'display: none'))]//h4[contains(@class,'text-black') and contains(@class,'font-bold')]");
    }
}