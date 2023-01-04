import './FromComponent.css'
const FromComponent =()=>{

    const inputTitle = (event)=>{
        console.log(event.target.value)
    }
    const inputAmout = (event)=>{
        console.log(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()//เป็นการไม่ให้รีเฟส
        console.log("บันทึกข้อมูลเรียบร้อย")
    }
    

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle}/>
                </div>
                <div className="form-control">
                    <label>ชจำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ,- รายจ่าย)" onChange={inputAmout}/>
                    
                </div>
                <div>
                    <button type="submit" className="btn">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}
export default FromComponent