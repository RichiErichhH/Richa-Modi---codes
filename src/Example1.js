import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
function Example1(){
 const[joke,setJoke]=useState("")
 
   useEffect(()=>{
    axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((response)=>{
            setJoke(response.data);
        })
        .catch((err)=>{
            alert(err);
        })
   },[]) 
    
 
 return(
    <div style={{backgroundColor:"Highlight"}}>
        <h1>Random Jokes</h1>
        <h3>{joke.setup}</h3>
        <p>{joke.punchline}</p>
     </div>
 )
}
export default Example1;