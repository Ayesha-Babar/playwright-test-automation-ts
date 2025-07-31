import { Page, expect } from '@playwright/test';
import { dragAndDropLocators } from './dragAndDropSliders.locators';
import { HomePageActions } from '../homePage/homePage.actions';

export class dragAndDropSliderActions extends HomePageActions {
  private locators: dragAndDropLocators;

  constructor(page: Page) {
    super(page); // Call parent constructor if needed
    this.locators = new dragAndDropLocators(page);
  }


    async dragSlider(targetValue: number) {
    const slider = await this.locators.firstSlider;
    const defaultValueLocator = this.locators.defaultValue;

    const boundingBox = await slider.boundingBox();
    if (!boundingBox) {
        throw new Error('Could not retrieve bounding box for the slider.');
    }

    const sliderCenterY = boundingBox.y + boundingBox.height / 2;
    let currentX = boundingBox.x + boundingBox.width / 2;
    let step = 2; // small pixel steps
    let maxAttempts = 100; // avoid infinite loops

    // Hold mouse down on the slider
    await this.page.mouse.move(currentX, sliderCenterY);
    await this.page.mouse.down();

    for (let i = 0; i < maxAttempts; i++) {
        await this.page.mouse.move(currentX + step, sliderCenterY);
        await this.page.waitForTimeout(50); // allow UI to update

        const valueText = await defaultValueLocator.textContent();
        const currentValue = Number(valueText?.trim());

        if (currentValue >= targetValue) {
            break;
        }

        currentX += step;
    }

    await this.page.mouse.up();

    // Optional: Final verification
    const finalValueText = await defaultValueLocator.textContent();
    const finalValue = Number(finalValueText?.trim());
    if (finalValue !== targetValue) {
        throw new Error(`Slider stopped at ${finalValue} instead of ${targetValue}`);
    }
}


    async verifySliderValue(targetValue: number) {
    const valueText = await this.locators.defaultValue.textContent();
    const value = Number(valueText?.trim());
    expect(value).toEqual(targetValue);
}
}
  

