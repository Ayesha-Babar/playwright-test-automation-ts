
import test, { Page, expect } from '@playwright/test';
import { ajaxFormSubmitActions } from '../pages/ajaxFormSubmit/ajaxFormSubmit.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

let simpleFormDemoActions: ajaxFormSubmitActions;

test("should enter a message and verify output", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Ajax Form Submit");
    
    let ajaxFormSubmit = new ajaxFormSubmitActions(page);
     await page.pause();
     expect(await ajaxFormSubmit.isAjaxFormSubmitHeadingVisible()).toBe(true);

     await ajaxFormSubmit.enterName("Ayesha Babar");

     await ajaxFormSubmit.enterMessage("typing a message in ajax form...");
     await ajaxFormSubmit.enterMessage("message 1");
     await ajaxFormSubmit.enterMessage("message 2");

     await ajaxFormSubmit.clickSubmitButton();
     
     await expect.poll(async ()=>await ajaxFormSubmit.isAjaxImageVisible(),{
        timeout:5000,
        message: "image is not visible after ajax form submission"
     }).toBe(true);
     
})