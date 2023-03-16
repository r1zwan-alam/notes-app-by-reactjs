import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App({ i }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [noteCard, setNoteCard] = useState([]);

  const [note, setNote] = useState([]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();

    setNote([
      ...note,
      {
        id: Date.now(),
        title: title,
        content: content,
      },
    ]);

    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    setNote((previousState) =>
      previousState.filter((individualNote) => individualNote.id !== id) // important! previousState is a word which is equivalent to notes, similarly individualNotes is word which is equivalent to all the objects or items present in the array named 'notes' , So previousState & individualNote are not predefined , we  can put any name there. the param 'id' is equivalent to the 'all.id' which is coming from the Note.js delete button, it is telling that which element has to removed from the array by using its 'id' which we enter in handleSave() function.
    );
  };

  return (
    <div>
      <Header />
      <br />
      <hr />
      <br />
      <CreateNote
        title={title}
        content={content}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        handleSave={handleSave}
      />

      <NoteList note={note} deleteNote={deleteNote} />
      <div className="show-note-form">
        <button className="bg-green-300 p-3 rounded-xl">ShowForm</button>
      </div>
    </div>
  );
}

export default App;
