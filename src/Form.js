import { useRef, useState} from  "react";
import  html2pdf  from "html2pdf.js";
const Form = () =>{
    const [state,setState] = useState(false);
    const divRef = useRef(null);
    const[name,setName] = useState("");
    const nameFun = (e) =>{
        setName(e.target.value);
    }
    const onSubmit = ()=>{
        setState(true);
        html2pdf(divRef.current);
    } 
    return(
        (state === true) ? 
        <div ref={divRef}> <h1>Name : {name}</h1></div> : 
        <div ref={divRef}><input type="text" placeholder="Enter your name" onChange={nameFun} /> 
        <button onClick={onSubmit}>Submit</button></div>
    )
}
export default Form;