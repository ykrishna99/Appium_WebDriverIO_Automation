//Author - Krishna Rao

//Selectors in WebDriverIO
describe('Finding Elements using Selectors', () => {

    //Using Class Selector
    it('class selector test', async () => {
        const apiDemos = await $('android.widget.TextView')
        await expect(apiDemos).toHaveText('API Demos')
    })

    //fetching all elements text
    it('Display all API Demos menus text', async () => {
        const allMenusElem = await $$('android.widget.TextView')
        for (let index = 1; index < allMenusElem.length; index++) {
            const element = allMenusElem[index];
            console.log(await element.getText())
        }
    })

    //Using Accessibility Id Selector
    it('accessibility id selector test', async () => {
        const app = await $('~App')
        await app.click()

        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeDisplayed()
    })

    //Using XPath Selector
    it('xpath selector test', async () => {
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
        await $('//android.widget.TextView[@text="Command two"]').click()
        const messageElem = await $('android.widget.TextView')
        await expect(await messageElem.getText()).toEqual('You selected: 1 , Command two')
    })

})