import { useEffect, useState } from "react";
import Useeffect from "../useeffect";

function useFetch(url){
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
       fetch(url).then((res)=>{
        if(!res.ok){
            throw new Error
        }
        return res.json()
       })
       .then((d)=>setData(d))
       .catch((e)=>setError(e))
       .finally(()=>setLoading(false))

    },[url])

    return {data,loading,error}
}
export default useFetch

// https://jsonplaceholder.typicode.com/todos/1