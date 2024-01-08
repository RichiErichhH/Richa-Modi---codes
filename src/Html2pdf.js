import {useRef } from "react";
import html2pdf from "html2pdf.js";

const Html2pdf = () =>{
    const divRef = useRef(null);

    const handlehtml2pdf = () =>{
        const element = divRef.current;
        html2pdf(element);
    }
    return (
        <div>
            <form onSubmit={handlehtml2pdf} ref={divRef}>
                <label>Name : </label>
                <input type="text" placeholder="Type your name here"/>
                <br/>
                <label>Email : </label>
                <input type="Email" placeholder="Type your email here"/>
                <br/>
                <label>Password : </label>
                <input type="Password" placeholder="Enter your password here"/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Html2pdf;