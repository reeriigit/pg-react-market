// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FromComponent from './components/FromComponent';
import BarMenu from './components/BarMenu';
import { useState,useEffect } from 'react';
import DataContaxt from './data/DataContext';
import ReportComponent from './components/ReportComponent';
// import { element } from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';//เป็นการimport tool หนึ่งที่เอาใว้สุ่มเลขไอดี

function App() {
  const design = {color:"red",textAlign:"center",fontSize:"1.5rem"}
  const initState = [
    {id:1,title:"ค่าเช่าบ้าน",amout:7000},
    {id:2,title:"ค่าเช่าโรงเเรม",amout:-6000},
    {id:3,title:"ค่าเช่าหอ",amout:400}
    
  ]
  
  
  const [items,setitems] = useState(initState)

  const [reportIncome,setReportIncom] = useState(0)
  const [reportexpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem)=>{
    setitems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }

  useEffect(()=>{
    const amouts = items.map(item=>item.amout)
    const income =  amouts.filter(element=>element>0).reduce((total,element)=>total+=element,0) ///เป็นการรวมยอด
    const expense  =  amouts.filter(element=>element<0).reduce((total,element)=>total+=element,0)

    setReportIncom(income)
    setReportExpense(expense)
  },[items,reportIncome,reportexpense])
  return (

    <DataContaxt.Provider value={
      {
        income:reportIncome,
        expense:reportexpense
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
