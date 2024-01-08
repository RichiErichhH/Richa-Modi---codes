import React,{ useState } from "react";
import axios from "axios";
export default function Postmethod(){
    const[data,setData]=useState({email:"",password:""});
    const handleChange=(e)=>{
        const value=e.target.value;
      
        setData({...data,[e.target.value]:value});
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const userData={
            email:data.email,
            password:data.password,
        }
    axios.put("https://reqres.in/api/users/",userData)
    .then((response)=>{
        console.log(response.status,response.data.token);
    })
    .catch((err)=>{
        console.log(err)
    })
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email"  onChange={handleChange} />
                <br/>
                <label>Password</label>
                <input type="password" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}