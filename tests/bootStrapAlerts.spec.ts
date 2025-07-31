import test, { Page, expect } from '@playwright/test';
import { BootstrapAlertsActions } from '../pages/bootstrapAlerts/bootstrapAlerts.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';
import assert from 'assert';


test("should enter a message and verify output", async ({ page }) => {
    let NoOfTimes = 3; // Number of times to move elements
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Bootstrap List Box");
    
    let bootstrapAlerts = new BootstrapAlertsActions(page);
    await page.pause();
    let lengthOfLeftListInitial = await bootstrapAlerts.getElementCountInLeftList();

    expect(await bootstrapAlerts.isBootstrapAlertsHeadingVisible()).toBe(true);

    await bootstrapAlerts.moveElementLeft(NoOfTimes);
    let lengthOfLeftListFinal = await bootstrapAlerts.getElementCountInLeftList();
    assert(lengthOfLeftListFinal=== lengthOfLeftListInitial + NoOfTimes);
    
    let lengthOfRightListInitial = await bootstrapAlerts.getElementCountInRightList();
    await bootstrapAlerts.moveElementRight(NoOfTimes);
    let lengthOfRightListFinal = await bootstrapAlerts.getElementCountInRightList();
    console.log("the length of the right list is",lengthOfRightListFinal);
    assert(await lengthOfRightListFinal=== 1 + NoOfTimes);
    
})