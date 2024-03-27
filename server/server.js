// Load env variables

if(process.env.NODE_ENV != "production"){

    require("dotenv").config();
}

// import express dependencies
const express = require('express');
const cors = require('cors');
const connectToDb = require("./config/connectToDb");
// const Note = require("./models/note")
const notesController = require("./controllers/notesController");


// create an express app
const app = express();


// Configure an express app
app.use(express.json());
app.use(cors());



// Connect to database
connectToDb();

// Routing
// app.get('/', (req, res)=>{
//     res.json({hello: "World"});
// });

app.get('/notes', notesController.fetchNote);
app.get('/notes/:id',notesController.fetchNotes)
app.post('/notes' ,notesController.createNote)
app.put('/notes/:id',notesController.UpdateNote )
app.delete('/notes/:id', notesController.deleteNote);


// start our server
app.listen(process.env.PORT);