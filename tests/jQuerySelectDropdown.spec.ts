import test, { Page, expect } from '@playwright/test';
import { jQuerySelectDropdownActions } from '../pages/jQuerySelectDropdown/jQuerySelectDropdown.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';
import assert from 'assert';


test("jQuery Select dropdown", async ({ page }) => {
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("JQuery Select dropdown");
    
    let jQuerySelectDropdown = new jQuerySelectDropdownActions(page);
    await page.pause();
    await jQuerySelectDropdown.verifyJquerySelectDropdownHeading();
    await jQuerySelectDropdown.selectOptionFromDropdownWithSearch();
    await jQuerySelectDropdown.selectMultipleOptions();
    await jQuerySelectDropdown.verifyDisabledOptions();
    await jQuerySelectDropdown.selectMultipleCategoryDropdown();

});
    