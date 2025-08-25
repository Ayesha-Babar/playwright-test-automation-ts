import test, { Page, expect } from '@playwright/test';
import { CheckboxDemoActions } from '../pages/CheckboxDemo/checkboxdemo.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("checkbox demo", async ({ page }) => {
   
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await page.pause();
    await homePage.clickLinks("Checkbox Demo");

    let checkboxDemo = new CheckboxDemoActions(page);
    await checkboxDemo.checkFirstCheckbox();
    await checkboxDemo.verifyCheckingFirstCheckbox();

    await checkboxDemo.verifyDisabledCheckbox();

    await checkboxDemo.verifyCheckingMultipleCheckboxes();

    await checkboxDemo.verifyUncheckingMultipleCheckboxes();
})