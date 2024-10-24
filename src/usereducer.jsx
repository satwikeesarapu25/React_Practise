import { useReducer, useState } from "react";
import Usestate from "./usestate";

const initialvalue = {
    count : 0
}
function reducerfn(state,action){
    switch(action.type){
        case 'increment':
            return {...state,
                count:state.count+1}
        case 'decrement':
            return {...state,
                count:state.count-1}
    }

}
function Usereducer(){    
    const [state,dispatchFunction] = useReducer(reducerfn,initialvalue)
    return(
        <>
        <button onClick={()=>dispatchFunction({type:'increment'})}>increment</button>
        <h3>count:{state.count}</h3>
        <button onClick={()=>dispatchFunction({type:'decrement'})}>decrement</button>
        </>
    )
}
export default Usereducer