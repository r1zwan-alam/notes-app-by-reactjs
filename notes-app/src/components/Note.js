import React from "react";

function Note({ note, deleteNote }) { // these params are actually a way of using props 
  return (
    <div className="container ">
      <div className="grid grid-cols-2 gap-2">
        {note.map((all, i) => {
          if (note[i].title && note[i].content != null) { // below some lines are very important
            return (
              <div key={i + 1} className="bg-yellow-200 p-3">
                <h1>{all.title}</h1>
                <p> {all.content}</p>
                <button
                  onClick={()=>deleteNote(all.id)} // Very important do not forgot to put this () , otherwise the function deleteNote will call itself infinite times . all.id will tell the deleteNote function about the id of the element
                  className="bg-red-400 p-1 mt-4 rounded-lg"
                >
                  Delete
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Note;
