const Note = require('../models/note')

const fetchNotes = async (req,res)=>{
    // Find the notes
    const notes = await Note.find();
    // Respond with them
    // res.json({notes:notes});
    res.json({notes});

};


const fetchNote = async(req,res) =>{
    // Get the id off the url
const noteId = req.params.id
    // find the note using that id
const note = await Note.findById(noteId)
    // respond with the note
    // res.json({note:note})
    res.json({note})
}

const createNote= async(req,res)=>{
    // get the sent in data off request body
    // const title = req.body.title;
    // const body = req.body.body;
    const {title,body} = req.body;

    // create a note with it
const note = await Note.create({
    title,
    body,
});

    // respond with the new note
    // res.json({note: note});
    res.json({note});
}

const UpdateNote = async (req,res)=>{
    // Get the id off the url
const noteId = req.params.id;
// Get the data off the req body
// const title = req.body.title;
// const body = req.body.body;
const {title, body} = req.body;

    // find and update the record
await Note.findByIdAndUpdate(noteId,{
    title,
    body,
})
// find updated note
const note = await Note.findById(noteId);

    // Respond with it
    // res.json({note:note});
    res.json({note});
}


const deleteNote = async (req,res)=>{
    // get id off url
    const noteId = req.params.id;
    // delete the record
    await Note.deleteOne({id: noteId});
    // respond
    res.json({success : "Record Deleted"});
}


module.exports = {
    // fetchNotes: fetchNotes,
    // fetchNote:fetchNote,
    // createNote:createNote,
    // UpdateNote:UpdateNote,
    // deleteNote:deleteNote
    fetchNotes,
    fetchNote,
    createNote,
    UpdateNote,
    deleteNote
}