// Author - Krishna Rao

const addNoteScreen = require('../../ColorNoteApp/screens/add-note-screen.js')
const deleteNoteScreen = require('../../ColorNoteApp/screens/delete-note-screen.js')

describe('Add note', () => {

    it.only('add note test', async () => {
        await addNoteScreen.skipBtn.click()
        await addNoteScreen.addNoteBtn.click()
        await addNoteScreen.noteOptionText.click()
        await driver.pause(3000)
        await addNoteScreen.noteTitle.addValue('My First Note')
        await addNoteScreen.noteText.addValue('Hi! Krishna Rao Yallampalli')

        await driver.back()
        await driver.back()
    })

    it('delete the note', async () => {
        //await driver.startActivity("com.socialnmobile.dictapps.notepad.color.note", "com.socialnmobile.colornote.activity.Main")
        //await driver.pause(3000)
        await addNoteScreen.skipBtn.click()
        const noteToDelete = await deleteNoteScreen.noteTitleToDelete.getText()
        await deleteNoteScreen.noteTitleToDelete.click()
        await deleteNoteScreen.menuMore.click()
        await deleteNoteScreen.deleteMenuOption.click()

        await driver.acceptAlert()
        
        await deleteNoteScreen.navBar.click()
        await deleteNoteScreen.trashCanMenu.click()
        await expect(deleteNoteScreen.noteTitleToDelete).toHaveText(noteToDelete)
    })

})