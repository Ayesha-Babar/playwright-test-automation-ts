import {Page,expect,Locator} from '@playwright/test'
export class jQuerySelectDropdownLocators{
    jQuerySelectDropdownHeading:Locator;
    countryDropdown :Locator;
    countrySearchField :Locator;
    multipleValuesDropdown :Locator;
    multipleValuesDropdownOptions :Locator;
    disabledValuesDropdown :Locator;
    categoryRelatedDropdown :Locator;
    disabledOption :Locator;

    constructor(public page:Page){
    this.jQuerySelectDropdownHeading = this.page.locator('//h1[text()="Jquery Dropdown Search Demo"]');
    this.countryDropdown = this.page.locator("//span[@class='select2-selection select2-selection--single']");
    this.multipleValuesDropdown = this.page.locator("//span[@class='select2-selection select2-selection--multiple']");
    this.disabledValuesDropdown = this.page.locator("//span[@id='select2-dl0l-container']");
    this.categoryRelatedDropdown = this.page.locator("//select[@id='files']");
    this.countrySearchField = this.page.locator("//span[@class='select2-search select2-search--dropdown']//input[@type='search']");
    this.disabledOption = this.page.locator("//li[text()='Guam']");
    this.multipleValuesDropdownOptions = this.page.locator("//ul[@class='select2-results__options']");
}

}
