// Author - Krishna Rao

describe('Alerts', () => {

    it('Handling Alerts', async () => {
        await $(`-ios predicate string:${`label == "Alert Views"`}`).click()

        const okayCancel = `label == "Okay / Cancel"`
        await $(`-ios predicate string:${okayCancel}`).click()

        console.log(await driver.getAlertText())

        //Accept Alert
        await driver.acceptAlert()

        //Again
        await $(`-ios predicate string:${okayCancel}`).click()
        //Accept Alert - OK click
        await $(`-ios predicate string:${`label == "OK"`}`).click()
        await expect($(`-ios predicate string:${`label == "OK"`}`)).not.toExist()

        //Again
        await $(`-ios predicate string:${okayCancel}`).click()

        //Dismiss Alert
        await driver.dismissAlert()

        //Again
        await $(`-ios predicate string:${okayCancel}`).click()        
        //Dismiss Alert - Cancel click
        await $(`-ios predicate string:${`label == "Cancel"`}`).click()
        await expect($(`-ios predicate string:${`label == "Cancel"`}`)).not.toExist()

        await driver.back()
        await driver.pause(3000)
    })

})