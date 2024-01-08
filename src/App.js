import React from 'react';
import Todoo from "./Todoo";
import {BrowserRouter as Router,Route,Routes,Link,useParams, BrowserRouter} from 'react-router-dom';
import Search from './Search';


const User = () =>{
  const { id }=useParams();
  console.log(id);
  return(
    <div>
      {Useparams.map((a)=>{
        
    return (a.id == id)? <h1>{a.name} {a.batch}</h1>:<div></div>})}
    </div>
  )
  
}

const App = () =>{
  return (
  <Search />
    // <BrowserRouter>
    // <div>
    //   <nav>
    //     <ul>
    //       {Useparams.map((value)=>{
    //         return(
    //           <li>
    //             <h1>{value.name}</h1>
    //             <Link to={`/users/${value.id}`}>Link</Link>
    //           </li>
    //         )
    //       })}
    //     </ul>
    //   </nav>
    // </div>
    // <Routes>
    //   {/* <Route path='/' element={<Home />}>Home</Route> */}
    //   <Route path="/users/:id" element={<User />}>Users</Route>
    // </Routes>
    // </BrowserRouter>
  )
  
}

export default App;

