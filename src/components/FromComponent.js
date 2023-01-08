// import { number } from 'prop-types'
import { useState,useEffect} from 'react'
import './FromComponent.css'
import { v4 as uuidv4 } from 'uuid';
const FromComponent =(props)=>{

    console.log("render from component")
    const [title,setTitle]= useState('')
    const [amout,setAmout]= useState(0)
    const [formValid,setFormValid]=useState(false)//เป็นการสร้างตัวปรเพื่อไม่ให้เเกิดกดได้ต่อเมือมีค่าให้ใส่

    const inputTitle = (event)=>{
        setTitle(event.target.value)
    }
    const inputAmout = (event)=>{
        setAmout(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()//เป็นการไม่ให้รีเฟส
        const itemData = {
            id:uuidv4(),
            title:title,
            amout:Number(amout)
        }
        props.onAddItem(itemData)
        setTitle('')///
        setAmout(0)///เป็นการเคลียค่าเมือมีการกดบันทึก
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amout!==0
        setFormValid(checkData)
    },[title,amout])//เป็นการทำให้ การเพิ่มข้อมูลได้ก็ต่อเมือไม่มีค่า null
    

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>ชจำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ,- รายจ่าย)" onChange={inputAmout} value={amout} />
                    
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}
export default FromComponent