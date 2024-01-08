import {useRef} from "react";

const Ex = () =>{
    const inputRef = useRef(null);

    const onClick = () =>{
        inputRef.current.placeholder = "hello";
    };
    return (
        <div>
            <h1>Welcome</h1>
            <input type="text" placeholder="Example" ref={inputRef}></input>
            <button onClick={onClick}>Change</button>
        </div>
    )
}
export default Ex;