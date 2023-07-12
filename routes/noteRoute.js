const express = require("express");
const router = express.Router();
const notesController = require("../Controllers/noteController");


router

  .get(notesController.getAllNotes)
  .post(notesController.createNewNote)
  .patch(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
