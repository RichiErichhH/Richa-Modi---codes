import React,{ useRef } from "react";

const Registration = () =>{
    const nameInput = useRef(null);
    const emailInput = useRef(null);    
    const passwordInput = useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name = nameInput.current.value;
        const email= emailInput.current.value;
        const password = passwordInput.current.value;

        nameInput.current.value = "";
        emailInput.current.value = " ";
        passwordInput.current.value = " ";
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameInput} />
        <input type="email" placeholder="Email" ref={emailInput} />
        <input type="password" placeholder="Password" ref={passwordInput} />
        <button type="submit">Register</button>
        </form>
        );
        
        
}
export default Registration;