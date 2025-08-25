import { Page, expect } from '@playwright/test';
import { BootstrapModalsLocators } from './bootstrapModals.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class bootstrapModalActions extends HomePageActions {
  private locators: BootstrapModalsLocators;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new BootstrapModalsLocators(page);
  }

  async isBootstrapModalHeadingVisible(): Promise<boolean> {
    return await this.locators.bootstrapModalHeading.isVisible();
  }

  async verifyModals(index:number){
    await this.waitForPageToLoad();
    switch(index){
        case 0:
            await this.locators.LaunchModalButtons.nth(0).click();
            expect(this.locators.modalText.nth(0)).toContainText("This is the place where the content for the modal dialog displays");
            await this.locators.saveButtons.nth(0).click();
            break;
        case 1:
            await this.locators.LaunchModalButtons.nth(1).click();
            expect(this.locators.modalText.nth(1)).toContainText("This is the place where the content for the modal dialog displays.");
            expect(this.locators.modalText.nth(2)).toContainText("Click launch modal button to launch second modal.");
            expect(this.locators.modalText.nth(3)).toContainText("Click close link to close the modal.");
            expect(this.locators.modalText.nth(4)).toContainText("Clicking on Save Changes button will close the modal and refresh the page");
            await this.locators.saveButtons.nth(1).click();
            break;
        case 2:
            await this.locators.LaunchModalButtons.nth(1).click();
            await this.locators.LaunchModalButtons.nth(2).click();
            expect(this.locators.modalText.nth(5)).toContainText("This is the place where the content for the modal dialog displays.");
            await this.locators.saveButtons.nth(2).click();
            break;
    }
  }

}