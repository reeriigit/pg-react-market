import Item from "./Item";
import './Transaction.css'
import DataContaxt from "../data/DataContext";
import { useContext } from "react";

const Transaction  =(props)=>{
    const {item} = props
    const {income,expense} = useContext(DataContaxt)

    return (
      <div>
        <ul className="item-list">
        {item.map((element)=>{
            return<Item {...element} key={element.id}/>
        })}
       
 
      </ul>
      <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p>
 
      </div>
    );
  }
  export default Transaction