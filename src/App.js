// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FromComponent from './components/FromComponent';
import Footer from './components/Footer';
const design = {color:"red",textAlign:"center",fontSize:"1.5rem"}


function App() {
  return (
   <div className="container">
    <h1 style={design}>Income and expenditure accounting program</h1>
    <FromComponent/>
    <Transaction/>
    <Footer/>
   </div>
  );
}

export default App;
