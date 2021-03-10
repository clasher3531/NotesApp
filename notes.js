const fs = require('fs');
const chalk = require('chalk');

getNotes = () => {
    try{

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    }catch{

        return [];
    }
    
}

const addNote = (title,body) => {
    var Notes = getNotes();
    var duplicateNote = Notes.find(note => note.title === title);

    if(!duplicateNote){
        Notes.push({
            title : title,
            body : body
        })
        saveNote(Notes);
        console.log(chalk.green.bold('Note Added Sucessfully'))
    }
    else{
        console.log(chalk.red.bold('Title is already taken'))
    }
}

const removeNote = title => {

    var Notes = getNotes();
    var updatedNotes = Notes.filter(note => note.title !== title);
    if(Notes.length===updatedNotes.length){
        console.log(chalk.red.bold('No note found'));
    }else{
        saveNote(updatedNotes);
        console.log(chalk.green.bold('Note Removed'));
    }

}

const listNode = () => {
    const Notes = getNotes();
    console.log(chalk.inverse('Your Notes\n'));
    Notes.forEach(note => console.log(chalk.blue.bold(note.title)));
}

const readNote = title => {
    const Notes = getNotes();
    const Note = Notes.find(note => note.title===title);
    if(Note){
        console.log(chalk.inverse(Note.title));
        console.log(Note.body);
    }else{
        console.log(chalk.red.bold('No Note found'));
    }
    
}

const saveNote = notes => {
    const Notes = JSON.stringify(notes);
    fs.writeFileSync('notes.json',Notes);
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNode : listNode,
    readNote : readNote
}