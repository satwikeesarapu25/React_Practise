import { useEffect, useState } from "react"
import Usestate from "./usestate"

function Useeffect(){
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        let a = async()=>{
        try{
            let api = 'https://jsonplaceholder.typicode.com/todos'
            let value= await fetch(api)
            if(!value.ok){
                throw new Error('data not found...')
            }
            let d = await value.json()
            setData(d)
        }
        catch(e){
            setError(e)
        }
        finally{
            setLoading(false)
        }
        }
        a()
    },[])
    console.log('render')
    if(loading){
        return <h1>loading..</h1>
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
      }
    return(
        <>
        {data.map((ele)=>{
            return(
                <>
                <h2>{ele.title}</h2>
                </>
            )
        })}
        </>
    )
}
export default Useeffect
