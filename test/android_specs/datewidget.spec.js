// Author - Krishna Rao

describe('Date Picker Automation', () => {

    it('Date', async () => {
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1")
        const dateElem = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        const currentDate = await dateElem.getText()
        console.log(currentDate);
        await $('~change the date').click()

        //scroll to next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await driver.pause(3000)

        await $('//android.view.View[@text="9"]').click()
        const selectedDate = await $('//android.widget.TextView[@resource-id="android:id/date_picker_header_date"]').getText()
        await expect(selectedDate).toContain('9')
        await $('//android.widget.Button[@text="OK"]').click()
        const changedDate = await dateElem.getText()
        await expect(changedDate).not.toEqual(currentDate)
    })
})