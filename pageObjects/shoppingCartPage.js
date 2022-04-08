const { expect } = require('@playwright/test');

exports.ShoppingCartPage = class ShoppingCartPage {

  constructor(page) {
    this.page = page;
    this.emptyShoppingCartHeader = page.locator('h2[data-bind="localeText: {key: \'lang_bag_empty_heading\'}"]')
  }

  async checkShoppingCartIsEmpty() {
    await expect(this.emptyShoppingCartHeader).toBeVisible();
  }
};
