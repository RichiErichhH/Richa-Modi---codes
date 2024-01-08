import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const nevigate= useNavigate();
        return(
        <div>
            <h1>HOME PAGE</h1>
            <button onClick={()=>{
                nevigate("/about")
            }}>About</button>
        </div>

    )
}
export default Home;