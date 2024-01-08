import React,{ useState } from "react";
import "./App.css";
function Todo(){
    const[Input,setInput]=useState('');
    const[Input1,setInput1]=useState('');
    const[update,setUpdate]=useState([]);
    const[editIndex,setEditIndex]=useState(null);
    function show1(e){
        setInput1(e.target.value);
    }
    function show(e){
    
        setInput(e.target.value);
    
    }
    function handleChange(){
        if (Input && Input1) {
            const TodoData = {
              title: Input1,
              description: Input,
            };
            if (editIndex !== null) {
                
                const updatedTodos = [...update];
                updatedTodos[editIndex] = TodoData;
                setUpdate(updatedTodos);
                setEditIndex(null);
                setInput1("");
                setInput("");
              } else {
                
                setUpdate([...update, TodoData]);
                setInput1("");
                setInput("");
              }
            }
          
    }
    const removeData=(index)=>{
        const updatedTodos=update.filter((_,i)=> i !== index);
        setUpdate(updatedTodos)
    }
    const editData=(index)=>{
        const editTodos=update.filter((a,i)=> i === index);
        if(editTodos){
            setInput1(editTodos[0].title);
            setInput(editTodos[0].description);
            setEditIndex(index);
        }
        
    }
    return(
        <div className="todo">
            <h1>Todo List</h1>
            <div className="wooo">
            <div className="e-card">
            <input type="text"  className="title" onChange={show1} value={Input1} placeholder="Title"></input>
            <input  className="text" type="text" onChange={show} value={Input} placeholder="Task"></input>
            
            <button className="btn"onClick={handleChange}>ADD</button>
            </div>
            </div>
            <ul className="item">
                {update.map((item,index)=>(
                    <div id={index} className="map">
                    <div className="jaane">
                    <li style={{ marginRight: "12px"}}>Title: {item.title}</li>
                    <li style={{ marginRight:"12px"}}>Description: {item.description}</li>
                    <div className="btn2">
                        <button onClick={()=>removeData(index)} className="btn3">Delete</button>
                        <button onClick={()=>editData(index)}>edit</button>
                    </div>
                    </div>
                    </div>
                ))}
            </ul>

        </div>
    )
}
export default Todo;

