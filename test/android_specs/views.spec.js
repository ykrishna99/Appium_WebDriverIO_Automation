//Author - Krishna Rao

describe('Views section', () => {

    it('Autocomplete', async () => {
        await $('~Views').click()
        await $('~Auto Complete').click()
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click()
        const autoCompleteElem = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]')
        await autoCompleteElem.addValue('Hyderabad')
        await expect(autoCompleteElem).toHaveText('Hyderabad')
    })

})