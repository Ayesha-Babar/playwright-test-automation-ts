import test from '@playwright/test';
import { shadowDomActions } from '../pages/shadowDOM/shadowDom.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("should enter a message and verify output", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
     await page.pause();
    await homePage.clickLinks(" Shadow DOM");

    let shadowDOM = new shadowDomActions(page);
    await shadowDOM.enterUserName();
    await shadowDOM.enterEmail();
    await shadowDOM.enterPassword();
    await shadowDOM.enterConfirmPassword();
    await shadowDOM.clickSubmitButton();
});