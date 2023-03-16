import React from 'react'

function CreateNote({title,content, handleSave, onChangeTitle, onChangeContent }) {
  
  return (
    <div className=" my-8 ">
      <form
        onSubmit={handleSave}
        action=""
        className="shadow-lg flex flex-col rounded-xl bg-gray-100 pt-2"
      >
        <input
          className="focus:outline-none  p-2 pl-4 rounded-t-xl bg-transparent"
          placeholder="Title"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />

        <textarea
          className="resize-none focus:outline-none bg-transparent p-2 pl-4"
          placeholder="Content"
          name=""
          id=""
          cols="30"
          rows="10"
          value={content}
          onChange={onChangeContent}
        ></textarea>

        <button className="bg-green-300 p-2 rounded-b-xl ">Save</button>
      </form>
    </div>
  );
}

export default CreateNote