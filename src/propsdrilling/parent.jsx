import { useState } from "react"
import Child from "./child"

function Parent(){
    const [count,setCount] =useState(0)
    const increment = ()=>{
        setCount(count+1)
    }
    return (
        <>
        <Child count={count}  increment={increment}/>
        </>
    )
}
export  default Parent