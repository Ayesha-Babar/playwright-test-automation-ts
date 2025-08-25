import { Locator,Page } from "@playwright/test";

export class BootstrapModalsLocators {
  bootstrapModalHeading: Locator;
  LaunchModalButtons: Locator;
  modalText:Locator;
  saveButtons: Locator;



  constructor(public page: Page) {
    this.bootstrapModalHeading = this.page.locator("//h1[text()='Bootstrap Modal']");
    this.LaunchModalButtons = this.page.locator("//button[text()='Launch Modal']");
    this.modalText = this.page.locator("//div[@class='modal-body']//p");
    this.saveButtons= this.page.locator("//button[text()='Save Changes']");
  }
}
