import test, { Page, expect } from '@playwright/test';
import { SimpleFormDemoActions } from '../pages/simpleFormDemo/simpleFormDemo.actions';
import { HomePageActions } from '../pages/homePage/homePage.actions';

test("should enter a message and verify output", async ({ page }) => {
    const message ="Typing message in input field";
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
    await homePage.clickLinks("Simple Form Demo");
    
    let simpleFormDemoActions = new SimpleFormDemoActions(page);
    await simpleFormDemoActions.isSimpleFormDemoHeadingVisible();
    await simpleFormDemoActions.fillMessageInput(message);
    await simpleFormDemoActions.clickGetCheckedValueButton();
    
    await simpleFormDemoActions.verifyMessageOutputText(message);
    
})