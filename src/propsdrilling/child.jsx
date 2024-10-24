import Childchild from "./childchild"


function Child({count,increment}){
    return(
        <>
       
        <Childchild count={count}/>
        <button onClick={increment}>increment</button>
        </>
    )
}
export default Child