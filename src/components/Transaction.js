import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';//เป็นการimport tool หนึ่งที่เอาใว้สุ่มเลขไอดี
const Transaction  =()=>{
    const data = [
        {title:"ค่าพยาบาล",amout:2000},
        {title:"ค่าอาหาร",amout:400},
        {title:"ค่าเดิน",amout:2050}
    ]
    return (
      <ul className="item-list">
        {data.map((e)=>{
            return<Item {...e} key={uuidv4()}/>
        })}
      
 
      </ul>
    );
  }
  export default Transaction