const {HomePage} = require("../pageObjects/homePage");
const {ShoppingCartPage} = require("../pageObjects/shoppingCartPage");
const { test, expect } = require('@playwright/test');

test.describe('Login tests', () => {

  test('Mini Cart icon with no products test', async ({page}) => {
    await page.goto('https://magento2-demo.magebit.com/customer/account');
    await page.waitForTimeout(5000);

    await page.goto('https://magento2-demo.magebit.com/customer/account');


    /*
    await page.goto('https://magento2-demo.magebit.com/customer/account/login/');
    await page.fill('[id="email"]', 'roni_cost@example.com');
    await page.fill('[id="pass"]', 'roni_cost3@example.com');
    await page.waitForTimeout(2000);
    await page.click('[id="send2"]');
    await page.waitForTimeout(5000);

    // Save signed-in state to 'storageState.json'.
    await page.context().storageState({ path: 'storageState.json' });
    */
  });
});
