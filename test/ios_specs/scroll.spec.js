// Author - Krishna Rao

describe('Scrolling Test', () => {

    it('Scrolling', async () => {
        
        //Simple Scrolling - down
        await driver.execute('mobile: scroll', {direction: "down"})

        //Simple Scrolling - up
        await driver.execute('mobile: scroll', {direction: "up"})

        //Element Scrolling
        await $('//XCUIElementTypeStaticText[@name="Picker View"]').click()
        const redColor = await $('//XCUIElementTypePickerWheel[@name="Red color component value"]')
        const greenColor = await $('//XCUIElementTypePickerWheel[@name="Green color component value"]')
        const blueColor = await $('//XCUIElementTypePickerWheel[@name="Blue color component value"]')

        await driver.execute('mobile: scroll', {element: redColor.elementId, direction: "down"})
        await driver.execute('mobile: scroll', {element: greenColor.elementId, direction: "down"})
        await driver.execute('mobile: scroll', {element: blueColor.elementId, direction: "down"})

        await driver.back()
        await driver.pause(3000)
    })

    it.only('Picker', async () => {

        await $('//XCUIElementTypeStaticText[@name="Picker View"]').click()
        const redColor = await $('//XCUIElementTypePickerWheel[@name="Red color component value"]')
        const greenColor = await $('//XCUIElementTypePickerWheel[@name="Green color component value"]')
        const blueColor = await $('//XCUIElementTypePickerWheel[@name="Blue color component value"]')

        //Mango colour - rgb(255, 200, 0)
        await redColor.addValue(255)
        await greenColor.addValue(200)
        await blueColor.addValue(0)

        await driver.pause(3000)
    })

})