// Author - Krishna Rao

class DeleteNoteScreen {

    get noteTitleToDelete() {
        return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

    get menuMore(){
        return $('~More')
    }

    get deleteMenuOption(){
        return $('//android.widget.TextView[@text="Delete"]')
    }

    get navBar(){
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }

    get trashCanMenu(){
        return $('//android.widget.TextView[@text="Trash Can"]')
    }

}

module.exports = new DeleteNoteScreen()