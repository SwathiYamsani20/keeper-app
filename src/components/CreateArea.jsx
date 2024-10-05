import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(inputText);
    setInputText({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={inputText.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={inputText.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
