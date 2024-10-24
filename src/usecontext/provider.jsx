import { useState } from "react";
import context from "./createcontext";

function Provider({children}){
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(prev=>prev+1)
    }
    const decrement = ()=> {
        setCount(prev=>prev-1)
    }

    return (
        <context.Provider value={{count,increment,decrement}}>
            {children}
        </context.Provider>
    )
}
export default Provider