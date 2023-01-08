// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FromComponent from './components/FromComponent';
import BarMenu from './components/BarMenu';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';//เป็นการimport tool หนึ่งที่เอาใว้สุ่มเลขไอดี





function App() {

  const design = {color:"red",textAlign:"center",fontSize:"1.5rem"}
  
  const initData = [
    {id:1,title:"ค่าพยาบาล",amout:2000},
    {id:2,title:"ค่าอาหาร",amout:400},
    {id:3,title:"ค่าเดิน",amout:2050}
  ]
  const [items,setitems] = useState([])
  const onAddNewItem = (newItem)=>{
    setitems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    
   <div className="container">
    <BarMenu/>
    <h1 style={design}>Income and expenditure accounting program</h1>
    <FromComponent onAddItem={onAddNewItem}/>
    <Transaction item = {items}/>
   </div>
  );
}

export default App;
