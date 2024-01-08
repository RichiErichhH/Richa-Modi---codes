import { useState , useRef } from "react";
import Userdata from "./Userdata";

const Search = () =>{
    const serachRef = useRef(null);
    const[input,setInput]=useState("");

    const handleInput = () =>{
        Userdata.filter((user)=>{
            
        })
    }
    return(
        <div ref={serachRef}>
            <input type="search" placeholder="enter your dish name"></input>
            <button onClick={handleInput}>Search</button>
        </div>
    )
}
export default Search;