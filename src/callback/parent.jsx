import React, { useState } from "react";
import Child from "./child";

function Parent(){
    const [count,setCount]=useState(0)
    // const fn = ()=>{}
        const fn = React.useCallback(()=>{},[])
    return(
       <>
       <Child fn={fn}/>
        <h1>count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>increment</button>
       </>
    )
}
export default Parent