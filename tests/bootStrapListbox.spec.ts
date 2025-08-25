import test, { Page, expect } from '@playwright/test';
import { BootstrapListboxActions } from '../pages/bootstrapListBox/bootstrapListbox.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';
import assert from 'assert';


test("boot strap list box", async ({ page }) => {
    let NoOfTimes = 3; // Number of times to move elements
    
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Bootstrap List Box");

    let bootstrapListbox = new BootstrapListboxActions(page);
    await page.pause();
    let lengthOfLeftListInitial = await bootstrapListbox.getElementCountInLeftList();

    expect(await bootstrapListbox.isBootstrapListboxHeadingVisible()).toBe(true);

    await bootstrapListbox.moveElementLeft(NoOfTimes);
    let lengthOfLeftListFinal = await bootstrapListbox.getElementCountInLeftList();
    assert(lengthOfLeftListFinal=== lengthOfLeftListInitial + NoOfTimes);

    let lengthOfRightListInitial = await bootstrapListbox.getElementCountInRightList();
    await bootstrapListbox.moveElementRight(NoOfTimes);
    let lengthOfRightListFinal = await bootstrapListbox.getElementCountInRightList();
    console.log("the length of the right list is",lengthOfRightListFinal);
    assert(await lengthOfRightListFinal=== 1 + NoOfTimes);
    
})