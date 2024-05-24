import React , {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Loli from './Loli';



const App = ()=>{ 
const [title , setTitl] = useState("title");
const demox = ()=>{
  setTitl("changed title")
}


  return(
<div className='ttttt'>
  <h1>
  {title}
  </h1>
<Loli x={demox} />
</div>


  );

}

export default App;
