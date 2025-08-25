import test, { Page, expect } from '@playwright/test';
import {BootstrapAlertsActions } from '../pages/bootstrapAlerts/bootstrapAlerts.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';


test("should enter a message and verify output", async ({ page }) => {
    let NoOfTimes = 3; // Number of times to move elements
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Bootstrap Alerts");

    let bootstrapAlerts = new BootstrapAlertsActions (page);
    await page.pause();
    expect(await bootstrapAlerts.isBootstrapAlertsHeadingVisible()).toBe(true);
    await bootstrapAlerts.verifyAutoclosableSuccessMessageOption();
    await bootstrapAlerts.verifyNormalSuccessMesageOption();
    await bootstrapAlerts.verifyAutoclosableInfoMessageOption();
    await bootstrapAlerts.verifyNormalInfoMessageOption();

});