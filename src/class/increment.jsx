import React from "react"
class Increment extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increment =()=>{
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    decrement = ()=>{
        this.setState((prevstate)=>({count:prevstate.count-1}))
    }
   render(){
    return(
        <>
        <p>count : {this.state.count}</p>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        </>
    )
   }

   
}
export default Increment