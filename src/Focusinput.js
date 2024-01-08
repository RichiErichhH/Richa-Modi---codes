import { useRef} from "react";
const Focusinput = () =>{
    const inputRef = useRef(null);

    const focus= () =>{
        if (inputRef.current){
            inputRef.current.focus();
        }
    }
    return (
        <div>
            <input type="text" ref={inputRef} placeholder="type here" />
            <button onClick={focus}>Focus</button>
        </div>
    )
}
export default Focusinput;