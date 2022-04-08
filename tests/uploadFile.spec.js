const { test, expect} = require('@playwright/test');

test.describe('Upload file', () => {

  test('Upload', async ({page, request}) => {
    // Act
    await page.goto('https://west-wind.com/wconnect/wcscripts/FileUpload.wwd');


    const apiRequest = await request.get(`https://reqres.in/api/users/2`);
    console.log(await apiRequest.json())


    /*
    await page.waitForSelector('form[action="FileUpload.wwd"] [class="fileUpload btn btn-primary"]');

    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      page.waitForEvent('filechooser'),
      // Opens the file chooser.
      page.locator('form[action="FileUpload.wwd"] [class="fileUpload btn btn-primary"]').click(),
    ]);
    await fileChooser.setFiles('cover.png');
    await page.waitForTimeout(10000);
     */
  });
});
