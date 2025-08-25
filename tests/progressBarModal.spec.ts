import test from '@playwright/test';
import {  progressBarModalActions } from '../pages/progressBarModal/progressBarModal.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("Progress bar Modal", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Progress Bar Modal");

    let progressBarModal = new progressBarModalActions(page);
    await page.pause();
    await progressBarModal.verifyProgressBarHeading();

    await progressBarModal.VerifyClickingOnShowModalForSecondsButton('twoSeconds');
    await progressBarModal.VerifyClickingOnShowModalForSecondsButton('threeSeconds');
    await progressBarModal.VerifyClickingOnShowModalForSecondsButton('fiveSeconds');

});
    