import React, { useState } from "react";
import { useEffect } from "react";
function App2() {
const [count, setCount] = useState(0);
const [mul,setMul] = useState(0);
useEffect(()=>{
setMul(count * 2)
},[count])
return (
<div>
<h1>The value of count variable is: {count} </h1>
<button onClick={()=>setCount((c)=>c + 1 )}> Calculate</button>
<p>The result of mul is: {mul}</p>
</div>
);
}
export default App2;
