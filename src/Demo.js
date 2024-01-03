import React from "react";
function Demo(){
    const arr=[1,2,3,4,5];
    const newarr= arr.filter((num)=>{
        if (num === 3 ){return false }else return true
    });
    return(
        <div>
            <center>
                <h1>Using Array Filter Function</h1>
            </center>
            <h1>Old array items are: { arr }</h1>
            {
                <h1>after applying filter method , the array elements are: {newarr}</h1>
            }
        </div>
    )
}
export default Demo;