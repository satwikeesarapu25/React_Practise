import { useContext } from "react";
import context from "./createcontext";

function Counter(){
    const {count,increment} = useContext(context)
    return(
        <>
        <p>count : {count}</p>
        <button onClick={increment}>incremnet</button>

        </>
    )
}
export default Counter