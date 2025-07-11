import mongoose from "mongoose";

// Step 1: create schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Step 2: create model based of schema
const Note = mongoose.model("Note", noteSchema);

export default Note;
