import React, { useState } from 'react'
function Changetagstyle() {
    const [a,setA] = useState('blue');
    function chgtag(){
    setA('red');
    }   
return (
    <div>
    <h1 style={{background:a}}>Hello World, Good morning!</h1>
    <button onClick={chgtag}>Change color</button>
    </div>
)
}
export default Changetagstyle