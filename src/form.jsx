import { useState } from "react";

function Form(){
    const [details,setDetails] = useState({name:'',age:''})
    const [data,setData] = useState([])

    const change = (e)=> {
        // e.preventdefault()
        const {name,value} = e.target
        setDetails(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const submit = ()=> {
        setData(prevData => [...prevData, details]);
        // Reset the details form to clear the inputs after submission
        setDetails({ name: '', age: '' });
    }
    data.sort(function(a,b){
        if(a['name']>b['name']) return 1
        else if(a['name']<b['name']) return -1
        else return 0
    })

    return(
        <>
        <div>
            <label htmlFor="name">name: </label>
            <input type="text" id="name" name="name" value={details.name} onChange={change}  required/>
        </div>
        <div>
            <label htmlFor="age">age :</label>
            <input type="number" id="age" name="age" value={details.age} onChange={change} maxLength={20} required/>
        </div>

        <div>
            <button onClick={submit}>submit</button>
        </div>

        <div>
            {data.map((ele)=>{
                return(
                    <>
                    <h1>name : {ele.name}</h1>
                    <h2>age : {ele.age}</h2>
                    </>
                )
            })}
        </div>

        
        
        </>

    )
}
export default Form