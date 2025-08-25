import test, { Page, expect } from '@playwright/test';
import { bootstrapProgressBarsActions } from '../pages/bootstrapProgressBars/bootstrapProgressBars.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';


test("should enter a message and verify output", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Bootstrap Progress bar");
    const bootstrapProgressBars = new bootstrapProgressBarsActions(page);
    await page.pause();
    await bootstrapProgressBars.isBootstrapProgressBarHeadingVisible();
    await bootstrapProgressBars.clickStartDownloadButton();
    await page.waitForTimeout(5000);
    expect(await bootstrapProgressBars.verifyProgressBarCompletion()).toBe(true);

});