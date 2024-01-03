import React from "react";

function Events(){
    const arr = [1, 8, 3];
    return (
       <div>
        {arr.map((value)=>{
            return (
                (value % 2 === 0)? <h1>{value} - Even Number</h1>:<h1>{value} - Odd Number</h1>
            )
        })}
       </div>
    );

}
export default Events;
