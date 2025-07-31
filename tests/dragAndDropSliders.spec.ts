import test, { Page, expect } from '@playwright/test';
import { dragAndDropSliderActions } from '../pages/dragAndDropSliders/dragAndDropSliders.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("should enter a message and verify output", async ({ page }) => {
   
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await page.pause();
    await homePage.clickLinks("Drag & Drop Sliders");

    let dragAndDrop = new dragAndDropSliderActions(page);
    await dragAndDrop.dragSlider(75);

    await dragAndDrop.verifySliderValue(75);
    
    
});
