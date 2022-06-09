//Author - Krishna Rao

describe('Views section', () => {

    it.only('Autocomplete', async () => {
        await $('//android.widget.TextView[@content-desc="Views"]').click()
        await $('//android.widget.TextView[@content-desc="Auto Complete"]').click()
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click()
        const autoCompleteElem = await $('android.widget.AutoCompleteTextView')
        await autoCompleteElem.setValue('Hyderabad')
        const actValue = await autoCompleteElem.getText()
        await expect(actValue).toEqual('Hyderabad')
    })
})