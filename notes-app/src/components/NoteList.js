import React from 'react'
import Note from './Note'

function NoteList({ note, deleteNote }) {
  return (
    <div className="">
      <Note note={note} deleteNote={deleteNote} />
      {/* <Note/> */}
      {/* <Note/> */}
    </div>
  );
}

export default NoteList