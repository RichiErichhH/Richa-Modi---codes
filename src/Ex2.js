import { useRef } from "react";
import img4 from "./image/img4.jpg";
import img5 from "./image/img5.jpg";

const Ex2 = () =>{
    const inputRef = useRef(null);
    const onClick = () =>{
        inputRef.current.src=img5;
    }

    return(
        <div>
            <img src={img4} alt="hello" ref={inputRef}/>
            <button onClick={onClick}>click</button>
        </div>
    )

}
export default Ex2;
