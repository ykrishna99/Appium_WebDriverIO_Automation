// Author - Krishna Rao

describe('Native Testing', () => {

    it('native test', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos")
        await driver.pause(3000)
    
        await $('~App').click()
        await $('~Activity').click()
        await $('~Hello World').click()
        const hw = await $('~Hello, World!')
        await expect(hw).toHaveText('Hello, World!')

    })
})