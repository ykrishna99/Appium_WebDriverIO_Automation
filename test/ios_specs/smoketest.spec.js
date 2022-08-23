//Author - Krishna Rao

//Navigating thru all the menus and verify corresponding screen displayed

describe('Smoke Test', () => {

    it('Validating all menus', async () => {
        const UICatalogMenus = await $$('XCUIElementTypeStaticText')
        for (let index = 1; index < UICatalogMenus.length; index++) {
            var element = UICatalogMenus[index];
            const eleName = await element.getText()
            await element.click()
            await driver.pause(100)
            await expect(await $('//XCUIElementTypeStaticText[@name="' + eleName + '"]')).toBeDisplayed()
            await driver.back()
            index = index + 1
        }
    })

})