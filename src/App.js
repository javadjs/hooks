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
const [timeArr , settimeArr] = useState([]);



const demox = ()=>{
  setTitl("changed title")
}
const changecolor = ()=>{
  setiscolor(!iscolor)

}



  return(
    <TestContext.Provider value={{
       timeArr,
      settimeArr
    }} >

   
<div className='ttttt'  style={{background:iscolor ? "black" : "white"}}>
<div className='showtime' style={{color:iscolor ? "white" : "black"}}>
<Timer  iscolor={iscolor} changecolor={changecolor} />
<TimeList  />
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







// آوردن پروژه از روی گیت هاب

// 1-انتخاب کامیت مورد نظر 
// 2- کلیک روی کد سبز رنگ و کپی کردن لینک
// 3- create new folder for vs code
// 4- open vs code and open new terminal
// 5- type => git clone link (link == 2)
// 6- delete folder (3) (فقط فولدری که از گیت گرفتیم بمونه یه فولدر بالاییش رو حذف میکنیم)
// 7- داخل پوشه گیت ایگنور نوشته شده چه چیزایی نیاورده باخودش با ان پی ام اینستال اونارو نصب میکنیم
// type => npm install
// 8- type => npm start

