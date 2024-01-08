import React,{ useRef,useState } from "react";

function Useref(){
    const  counter = useRef(null);
    const[state,setState]= useState("");
    const increment=()=>{
        counter.current+=1;
        setState(counter.current);
    }

    return(
        <div>
            <p>Counter : {state}</p>
            <button onClick={increment} >Increment</button>
        </div>
    )
}
export default Useref;