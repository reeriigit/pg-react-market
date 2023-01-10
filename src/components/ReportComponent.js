import { useContext } from "react";
import DataContaxt from "../data/DataContext";

const ReportComponent=()=>{
    const {income,expense} = useContext(DataContaxt)
    return(
        <div>
            <p>รายรับ : {income}</p>
            <p>รายจ่าย : {expense}</p>
          
        </div>
    );

}
export default ReportComponent