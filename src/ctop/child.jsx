import ParentComponent from "./parent"
function ChildComponent({onData}){
    const d = 'data sent from child'
    return(
        <>
        <button onClick={()=>onData(d)}>
            send data to parent
        </button>
        </>
    )
}
export default ChildComponent