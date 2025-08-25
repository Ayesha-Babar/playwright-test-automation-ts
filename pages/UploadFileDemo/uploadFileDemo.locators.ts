import {Page,Locator} from '@playwright/test'
export class uploadFileLocators{
    uploadFileHeading:Locator;
    uploadFileButton:Locator;
    message:Locator;

    constructor(public page:Page){
        this.uploadFileHeading = this.page.locator("//h1[text()='Upload File Demo']");
        this.uploadFileButton = this.page.locator("//input[@id='file']");
        this.message = this.page.locator("//div[@id='error']");
       
    }
}