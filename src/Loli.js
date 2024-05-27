import React , {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class Loli extends React.Component{
    constructor(){  
 super();

}

render(){
    return(
        <div className='eeee'>
        <span onClick={this.props.x}   style={{
        background:this.props.iscolor ? "white" : "black",
        color : this.props.iscolor ? "black" : "white"

        }}  >click</span>
        <span onClick={this.props.changecolor} 
        style={{
        background:this.props.iscolor ? "white" : "black",
        color : this.props.iscolor ? "black" : "white"

        }}
        
        >change background color</span>
        </div>
        );
} 



}



export default Loli;