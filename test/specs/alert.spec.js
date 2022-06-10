// Author - Krishna Rao

describe('Alert Testing', () => {

    it('alert test', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        await driver.pause(3000)

        await $('~OK Cancel dialog with a message').click()

        console.log(await driver.getAlertText());    
        
        //await driver.acceptAlert()
        //await driver.dismissAlert()
        
        //click OK button
        await $('//android.widget.Button[@text="OK"]').click()

        //click Cancel button
        //await $('//android.widget.Button[@text="Cancel"]').click()

        await expect(await $('//android.widget.TextView[@id="android:id/alertTitle"]')).not.toExist()
    })
})