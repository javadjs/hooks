import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Loli from './Loli';
import Timer from './Timer';
import TimeList from "./TimeList.jsx"
import { TestContext } from './TestContext.js';



const App = ()=>{ 
const [title , setTitl] = useState("title");
const [iscolor , setiscolor] = useState(false);
const [timeArr , settimeArr] = useState(["44:55:66"]);



const demox = ()=>{
  setTitl("changed title")
}
const changecolor = ()=>{
  setiscolor(!iscolor)

}



  return(
    <TestContext.Provider value={{
      timeArr: timeArr,
      settimeArr : settimeArr
    }} >

   
<div className='ttttt'  style={{background:iscolor ? "black" : "white"}}>
<div className='showtime' style={{color:iscolor ? "white" : "black"}}>
<Timer  iscolor={iscolor} changecolor={changecolor} />
</div>
  <h1 style={{color:iscolor ? "white" : "black"}}>
  {title}
  </h1>
<Loli x={demox} changecolor={changecolor} iscolor={iscolor} />
</div>


</TestContext.Provider>
  );
 
}

export default App;
