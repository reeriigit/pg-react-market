import './Transaction.css'
import PropTypes from 'prop-types';
import './Item.css'
const Item =(props)=>{
    const {title,amout} = props

    const status = amout<0 ? "expense":"income"
    const symbol = amout<0 ? "-":"+"
    return(
        <li className={status}>{title} <span>{symbol}{Math.abs(amout)}</span></li>
    );
}

Item.propTypes={
    title:PropTypes.string,
    amout:PropTypes.number
}

export default Item