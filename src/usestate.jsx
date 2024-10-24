import { useState } from "react"

function Usestate(){
    const [data,setData] = useState(0)

    const increment = ()=> {
        setData(data+1)
    }
    const decrement = ()=> {
        setData(data-1)
    }
    return(
        <div>
            <button onClick={decrement}>decrement</button>
            <h1>count : {data}</h1>
            <button onClick={increment}>increment</button>
        </div>
    )
}
export default Usestate