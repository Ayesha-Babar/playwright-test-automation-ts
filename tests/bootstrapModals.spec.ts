import test, { Page, expect } from '@playwright/test';
import { bootstrapModalActions } from '../pages/bootstrapModals/bootstrapModals.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';


test("boot strap modals", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Bootstrap Modals");
    const bootstrapModals = new bootstrapModalActions(page);
    await bootstrapModals.verifyModals(0);
    await bootstrapModals.verifyModals(1);
    await bootstrapModals.verifyModals(2);
});