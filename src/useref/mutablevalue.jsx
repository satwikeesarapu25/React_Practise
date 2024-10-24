import { useRef } from "react";

function TMutable(){
    const countRef = useRef(0)

    const increment =()=>{
        countRef.current=countRef.current+1;
        console.log(`count is now: ${countRef.current}`)
    }

    return(
       <>
        <p>click the btn to increment:</p>
        <button onClick={increment}>increment</button>
       </>
    )
}
export default Mutable