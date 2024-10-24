import { useState } from "react";
import ChildComponent from "./child";
function ParentComponent(){
    const [childdata,setChildata] = useState('')
    const handleDataFromChild = (data)=>{
        setChildata(data)
    }

    return (
       <>
        <ChildComponent onData={handleDataFromChild}/>
        <p>data from child:{childdata}</p>
       </>
    )

}
export default ParentComponent