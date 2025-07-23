import test, { Page, expect } from '@playwright/test';
import { HomePageActions } from '../pages/homePage/homePage.actions';
import { HomePageLocators } from '../pages/homePage/homePage.locators';

let homePageActions: HomePageActions;

test.beforeEach(async ({ page }) => {
  homePageActions = new HomePageActions(page);
  await homePageActions.navigateToHomePage("https://www.lambdatest.com/selenium-playground/");
});

test('should click ', async ({ page }) => {
  // your test logic goes here
  // example: await homePageActions.someAction();
});
test('should click Simple Form Demo link', async ({ page }) => {
   
    
  });


  
