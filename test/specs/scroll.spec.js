// Author - Krishna Rao

describe('Scroll Testing', () => {

    it('vertical scroll', async () => {
        await $('~App').click()
        await $('~Activity').click()

        //scroll to end
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await $('~Secure Surfaces').click()
        await expect($('~Secure Dialog')).toBeDisplayed()

        //going back and scroll to beginning
        await driver.back()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,5)')
        await expect($('~Secure Dialog')).not.toBeDisplayed()

        //scroll to element
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()
        await expect($('~Secure Dialog')).toBeDisplayed()
    })

    it('horizontal scroll', async () => {
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1")
        
        //scroll forward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await driver.pause(3000)

        //scroll backward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
        await driver.pause(3000)
    })
})