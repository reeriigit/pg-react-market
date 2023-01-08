import Item from "./Item";
import './Transaction.css'
const Transaction  =(props)=>{
    const {item} = props

    return (
      <ul className="item-list">
        {item.map((element)=>{
            return<Item {...element} key={element.id}/>
        })}
      
 
      </ul>
    );
  }
  export default Transaction