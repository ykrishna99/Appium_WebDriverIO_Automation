// Author - Krishna Rao

describe('Find Elements', () => {

    it('Accessibility Id', async () => {
        await $('~Alert Views').click()
        await $('~Simple').click()
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
        await driver.acceptAlert()
        await driver.back()
        await driver.pause(3000)
    })

    it('Tag Name', async () => {
        const UICatalogMenus = await $$('XCUIElementTypeStaticText')
        for (const element of UICatalogMenus) {
            console.log(await element.getText())
        }
    })

    it('XPath', async () => {
        await $('//XCUIElementTypeStaticText[@name="Text Fields"]').click()
        const textFields = await $$('//XCUIElementTypeTextField')
        for (const element of textFields) {
            await element.addValue('Hi Krishna')
        }
        await driver.back()
        await driver.pause(3000)
    })

    it('iOS Class Chain', async () => {
        await $('//XCUIElementTypeStaticText[@name="Text Fields"]').click()

        const secureTextField = `**/XCUIElementTypeSecureTextField[\`value == "Placeholder text"\`]`
        await $(`-ios class chain:${secureTextField}`).addValue('Hi Krishna')

        await driver.back()
        await driver.pause(3000)
    })

    it('iOS Predicate String', async () => {
        await $(`-ios predicate string:${`label == "Text Fields"`}`).click()

        const secureTextField = `value == "Placeholder text" AND type == "XCUIElementTypeSecureTextField"`
        await $(`-ios predicate string:${secureTextField}`).addValue('Hi Krishna')

        await driver.back()
        await driver.pause(3000)
    })
})