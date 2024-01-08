import React from "react";
import { useNavigate } from "react-router-dom";
const About=()=>{
    const navigate=useNavigate();
    return(

        <div>
            <h1>ABOUT PAGE</h1>
            <button onClick={()=> navigate(-1)
        }>Home</button>
        </div>
    )
}
export default About;