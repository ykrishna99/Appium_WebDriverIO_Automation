// Author - Krishna Rao

const deleteNoteScreen = require('../../ColorNoteApp/screens/delete-note-screen.js')

describe('Delete Note', () => {

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