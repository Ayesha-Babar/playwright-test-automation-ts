import {Page,expect,Locator} from '@playwright/test'
export class progressBarModalLocators{
   progressBarModalHeading: Locator;
   showDialogButtonTwoSeconds: Locator;
   showDialogButtonThreeSeconds: Locator;
   showDialogButtonFiveSeconds: Locator;
   modal :Locator;
   

    constructor(public page:Page){
    this.progressBarModalHeading = this.page.locator('//h1[text()="Bootstrap Progress Bar Dialog Demo"]');
    this.showDialogButtonTwoSeconds = this.page.locator("//button[text()='Show dialog (Autoclose after 2 seconds)']");
    this.showDialogButtonThreeSeconds = this.page.locator("//button[text()='Show dialog (Autoclose after 3 seconds)']");
    this.showDialogButtonFiveSeconds = this.page.locator("//button[text()='Show dialog (Autoclose after 5 seconds)']");
    
}

}
