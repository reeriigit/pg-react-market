// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FromComponent from './components/FromComponent';
import BarMenu from './components/BarMenu';
import { useState } from 'react';
import DataContaxt from './data/DataContext';
import ReportComponent from './components/ReportComponent';
// import { v4 as uuidv4 } from 'uuid';//เป็นการimport tool หนึ่งที่เอาใว้สุ่มเลขไอดี

function App() {

  const design = {color:"red",textAlign:"center",fontSize:"1.5rem"}
  
  const [items,setitems] = useState([])
  const onAddNewItem = (newItem)=>{
    setitems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (

    <DataContaxt.Provider value={
      {
        income:50000,
        expense:-8000
      }
    }>
      <div className="container">
        {/* <div className="testslide"></div> */}
        <BarMenu/>
        <h1 style={design}>Income and expenditure accounting program</h1>
        <ReportComponent/>
        <FromComponent onAddItem={onAddNewItem}/>
        <Transaction item = {items}/>
      </div>
    </DataContaxt.Provider>
  );
}

export default App;
