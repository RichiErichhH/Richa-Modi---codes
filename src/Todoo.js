import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import "./App.css";

function Todoo() {
  const [Input, setInput] = useState("");
  const [Input1, setInput1] = useState("");
  const [update, setUpdate] = useState([]);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function show1(e) {
    setInput1(e.target.value);
  }

  function show(e) {
    setInput(e.target.value);
  }

  function handleChange() {
    if (Input && Input1) {
      const TodoData = {
        title: Input1,
        description: Input,
      };
      {
        setUpdate([...update, TodoData]);
        setInput1("");
        setInput("");
      }
    }
  }

  const removeData = (index) => {
    const updatedTodos = update.filter((_,i) => i !== index);
    setUpdate(updatedTodos);
  };

  const editData = (index, title, content) => {
    setEditIndex(index);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const updateData = () => {
    const updatedTodos = [...update];
    updatedTodos[editIndex] = {
      title: editedTitle,
      description: editedContent,
    };
    setUpdate(updatedTodos);
    setEditIndex(null);
    setEditedTitle("");
    setEditedContent("");
  };

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <div className="wooo">
        <div className="e-card">
          <input
            type="text"
            className="title"
            onChange={show1}
            value={Input1}
            placeholder="Title"
          />
          <input
            className="text"
            type="text"
            onChange={show}
            value={Input}
            placeholder="Task"
          />

          <button className="btn" onClick={handleChange}>
            ADD
          </button>
        </div>
      </div>
      <ul className="item">
        {update.map((item, index) => (
          
          <div id={index} className="map" key={index}>
            
            {editIndex === index ? (

            <div className="editinput">
                <div className="edit">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                </div>
                <div>
                  <button onClick={updateData}>Update</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              
              </div>
        
            ) : (
              <div className="jaane">
                <li style={{ marginRight: "12px" }}>Title: {item.title}</li>
                <li style={{ marginRight: "12px" }}>Description: {item.description}
                </li>
                <div className="btn2">
                  <button
                    onClick={() => removeData(index)}
                    className="btn3"
                  >
                    <AiOutlineDelete />
                  </button>
                  <button
                    onClick={() => editData(index, item.title, item.description)}
                    className="btn4"
                  >
                    <MdOutlineEdit />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todoo;
