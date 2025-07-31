import test, { Page, expect } from '@playwright/test';
import { javascriptAlertsActions } from '../pages/javascriptAlerts/javascriptAlerts.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("should click on alert buttons and accept them", async ({ page }) => {
   
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await page.pause();
    await homePage.clickLinks("Javascript Alerts");
    
    const javascriptAlerts = new javascriptAlertsActions(page);
    await javascriptAlerts.verifyJavascriptAlertsHeading();
    await javascriptAlerts.verifyAlerts("javascript Alerts");
    await javascriptAlerts.verifyAlerts("confirm Box");
    await javascriptAlerts.verifyAlerts("prompt Box");

});
