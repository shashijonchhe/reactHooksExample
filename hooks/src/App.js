import React from 'react';
import {useState} from 'react';
import './App.css';



export default ()=>{
  const [age,setAge]=useState(0);
  const [name,setName]=useState('');


return(
  <div className="App">
    AGE:{age}
    <br/>
    <button onClick={()=>setAge(age+2)}>Increase</button>
    <br/>
    NAME:{name}
    <br/>
    <input type='text' onChange={(e)=>setName(e.target.value)}/>
  </div>
)



}