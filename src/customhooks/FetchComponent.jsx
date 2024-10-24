import useFetch from "./useFetch";

function FetchComponent(){
    const {data,loading,error}=useFetch('https://jsonplaceholder.typicode.com/todos')
    if(loading) return <div>loading..</div>
    if(error) return <div>error:{error.message}</div>

    return(
        // <div>
        //     <p>data:{JSON.stringify(data)}</p>
        // </div>
        <>
        {data.map((ele)=>{
            return(
                <>
                <h4>data:{JSON.stringify(data)}</h4>
                <h1>data:{ele.id}</h1>
                <h2>data : {ele.title}</h2>
                </>
            )
        })}
        </>
    )
}export default FetchComponent