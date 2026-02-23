var notesContainer = document.getElementById("notesContainer");


window.onload = function() {
    var savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
};

function addNote() {

    var noteDiv = document.createElement("div");
    noteDiv.className = "note";

    noteDiv.innerHTML = `
        <span class="delete-btn" onclick="deleteNote(this)">X</span>
        <textarea onkeyup="saveNotes()" placeholder="Write your note..."></textarea>
    `;

    notesContainer.appendChild(noteDiv);

    saveNotes();
}

function deleteNote(button) {
    button.parentElement.remove();
    saveNotes();
}

function saveNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}