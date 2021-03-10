const { argv } = require('yargs');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Text',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        getNotes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        getNotes.removeNote(argv.title);
    }
})

yargs.command({
    command : 'list',
    describe : 'List all the notes',
    handler(){
        getNotes.listNode();
    }
})

yargs.command({
    command : 'read',
    describe : 'Read a note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        } 
    },
    handler(argv){
        getNotes.readNote(argv.title);
    }
}
)

yargs.parse();
