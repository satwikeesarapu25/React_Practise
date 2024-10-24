import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./actions"

const Counter = ()=>{
    const count = useSelector((state)=>state.count)
    const dipatch = useDispatch()

    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>dipatch(increment())}>increment</button>
            <button onClick={()=>dipatch(decrement())}>decrement</button>
        </div>
    )
}
export default Counter