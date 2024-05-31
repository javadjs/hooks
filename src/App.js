import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Loli from './Loli';
import Timer from './Timer';
import TimeList from "./TimeList.jsx"



const App = ()=>{ 
const [title , setTitl] = useState("title");
const [iscolor , setiscolor] = useState(false);
const [timeArr , settimeArr] = useState([]);



const demox = ()=>{
  setTitl("changed title")
}
const changecolor = ()=>{
  setiscolor(!iscolor)

}



  return(
    
<div className='ttttt'  style={{background:iscolor ? "black" : "white"}}>
<div className='showtime' style={{color:iscolor ? "white" : "black"}}>
<Timer timeArr = {timeArr} settimeArr = {settimeArr} iscolor={iscolor} changecolor={changecolor} />
</div>
  <h1 style={{color:iscolor ? "white" : "black"}}>
  {title}
  </h1>
<Loli x={demox} changecolor={changecolor} iscolor={iscolor} />

</div>



  );
 
}

export default App;
