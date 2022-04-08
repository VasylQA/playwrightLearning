const { click } = require("../support/helpers");
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  constructor(page) {
    this.page = page;
    this.logoOnHomepage = page.locator('[data-testid="asoslogo"]');
    this.shoppingCartIcon = page.locator('[data-testid="miniBagIcon"]')
  }

  async goToMainPage() {
    await this.page.goto('https://www.asos.com/');
  }

  async openShoppingCart() {
    await click(this.shoppingCartIcon);
  }

  async checkLogoPresent() {
    await expect(this.logoOnHomepage).toBeVisible();
  }
};
