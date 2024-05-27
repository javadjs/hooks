import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Loli from './Loli';



const App = ()=>{ 
const [title , setTitl] = useState("title");
const [iscolor , setiscolor] = useState(false)
const demox = ()=>{
  setTitl("changed title")
}
const changecolor = ()=>{
  setiscolor(!iscolor)

}

//First time after rendering

// useEffect(()=>{
// console.log("xxxxxxxxxxxxx")
// },[])


//Whenever the component changes

// useEffect(()=>{
// console.log("zzzzzzzzzzzz")
// },[iscolor])


//When the component is closed

useEffect(()=>{
  console.log("zzzzzzzzzzzz")
return()=>{
  
}
},[iscolor])



  return(
<div className='ttttt'  style={{background:iscolor ? "black" : "white"}}>
  <h1 style={{color:iscolor ? "white" : "black"}}>
  {title}
  </h1>
<Loli x={demox} changecolor={changecolor} iscolor={iscolor} />
</div>


  );
 
}

export default App;
