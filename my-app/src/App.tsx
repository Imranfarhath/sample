import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  useEffect(()=>{
    async function fetchData()
    {
      try{
        const response=await axios.post('http://localhost:3000/setdata',{username:"imran",password:"imran123"});
        console.log(response);
      }
      catch(e)
      {
        console.log(e);
      }
    }
    fetchData();
  },[])
  return (
    <>
      <h1>hello</h1>
      {<h1>{userdata.age}</h1>}
    </>
  )
}

export default App
