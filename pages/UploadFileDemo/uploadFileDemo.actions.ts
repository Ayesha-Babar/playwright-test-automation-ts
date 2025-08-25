import { Page, expect } from '@playwright/test';
import {uploadFileLocators} from './uploadFileDemo.locators';
import { HomePageActions } from '../homePage/homePage.actions';
import path from 'path/win32';

export class uploadFileActions extends HomePageActions {
  private locators:uploadFileLocators;

  constructor(page: Page) {
    super(page); 
    this.locators = new uploadFileLocators(page);
  }

  async isUploadFileHeadingVisible(): Promise<boolean> {
    await this.waitForPageToLoad();
    return this.locators.uploadFileHeading.isVisible();
  }

  async uploadFile(fileName: string): Promise<void> {
    await this.waitForPageToLoad();
    const filePath = path.join(__dirname, '..', '..', 'test-files', fileName);
    await this.locators.uploadFileButton.setInputFiles(filePath);

  }

  async verifyUploadingValidFile(){
    await this.waitForPageToLoad();
    await expect(this.locators.message).toHaveText('File Successfully Uploaded');
  }

  async verifyUploadingInvalidFile(){
    await this.waitForPageToLoad();
    await expect(this.locators.message).toHaveText('File type should be pdf, png, jpeg or jpg');
  }

 
}