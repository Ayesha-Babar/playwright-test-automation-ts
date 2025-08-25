import { test,expect} from '@playwright/test';
import { uploadFileActions} from '../pages/UploadFileDemo/uploadFileDemo.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';
test("Upload File Demo", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Upload File Demo");

    let uploadFile = new uploadFileActions(page);
    await page.pause();
    expect(await uploadFile.isUploadFileHeadingVisible()).toBeTruthy();
 
    //valid file
    await uploadFile.uploadFile('file-sample_150kB.pdf');
    await uploadFile.verifyUploadingValidFile();

    //invalid file
    await uploadFile.uploadFile('file-sample_100kB.doc');
    await uploadFile.verifyUploadingInvalidFile();
});