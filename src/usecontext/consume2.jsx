import { useContext } from "react";
import context from "./createcontext";

function Counter1(){
    const {count,decrement}=useContext(context)
    return(
        <>
        {/* <p>count : {count}</p> */}
        <button onClick={decrement}>decrement</button>
        </>
    )
}
export default Counter1