class AddNoteScreen {
    
    get skipBtn() {
        return $('//android.widget.Button[@text="SKIP"]')
    }

    get addNoteBtn() {
        return $('//android.widget.TextView[@text="Add note"]')
    }

    get noteOptionText() {
        return $('//android.widget.TextView[@text="Text"]')
    }

    get noteOptionChecklist() {
        return $('//android.widget.TextView[@text="Checklist"]')
    }

    get noteTitle() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    get noteText() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

}

module.exports = new AddNoteScreen()