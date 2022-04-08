const { test, expect } = require('@playwright/test');

test.describe('Homepage tests', () => {

  test('Mini Cart icon with no products test', async ({page}) => {
    // Arrange
    const textForSearch = 'text';

    // Act
    await page.goto('https://www.asos.com/');
    await page.locator('[data-testid="miniBagIcon"]').click();

    // Assert
    await expect(page.locator('h2[data-bind="localeText: {key: \'lang_bag_empty_heading\'}"]')).toBeVisible();
  });
});
