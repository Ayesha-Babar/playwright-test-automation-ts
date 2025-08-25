import test, { Page, expect } from '@playwright/test';
import { HomePageActions } from '../pages/homePage/homePage.actions';
import { BootstrapDatePickerActions } from '../pages/bootstrapDatePicker/bootstrapDatePicker.actions';

test("boot strap date picker", async ({ page }) => {
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Bootstrap Date Picker");

    let bootstrapDatePicker = new BootstrapDatePickerActions(page);
    await page.pause();
    expect(await bootstrapDatePicker.isBootstrapDatePickerHeadingVisible()).toBe(true);
    await bootstrapDatePicker.selectBirthday("01-01-2025");

});