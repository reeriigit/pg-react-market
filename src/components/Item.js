import './Transaction.css'
import PropTypes from 'prop-types';
const Item =(props)=>{
    const {title,amout} = props
    return(
        <li >{title}<span>{amout}</span></li>
    );
}

Item.propTypes={
    title:PropTypes.string,
    amout:PropTypes.number
}

export default Item