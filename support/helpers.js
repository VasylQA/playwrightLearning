module.exports = {
  click: async function (locator) {
    await page.waitForLoadState();
    await locator.waitFor();
    await locator.click();
  },

  typeText: async function (locator, text) {
    await locator.clearField();
    await locator.fill(text)
  }
};
