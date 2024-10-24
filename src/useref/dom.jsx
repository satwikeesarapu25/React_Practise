//accessing dom elements directly,storing a mutable value,prventing unnecessary functon creation
import React, { useEffect, useRef } from "react";
function TextInput(){
    const inputel=useRef(null)
    useEffect(()=>{
        inputel.current.focus()
    },[])
    const change = ()=>{
        inputel.current.style.color='green'
    }
    const blur = ()=>{
        inputel.current.style.color='black'
    }
    return(
        <input type="text" ref={inputel} onFocus={change} onBlur={blur}/>
    )
}
export default TextInput