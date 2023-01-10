import Item from "./Item";
import './Transaction.css'

const Transaction  =(props)=>{
    const {item} = props

    return (
      <div>
        <ul className="item-list">
        {item.map((element)=>{
            return<Item {...element} key={element.id}/>
        })}
       
 
      </ul>
      </div>
    );
  }
  export default Transaction