import React from"react";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import { useState } from "react";

function Changeimg(){
    const[img,setImg] = useState(img1);

    function changeImage(){
        setImg(img2);
    }
    return (
        <div>
            <img src={img} alt="logo" height="200px" width="200px" />
            <button onClick={changeImage}>Change Image</button>
        </div>
    )
}
export default Changeimg;