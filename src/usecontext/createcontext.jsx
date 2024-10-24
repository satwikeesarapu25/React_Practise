import { createContext } from "react";

const context = createContext({
    count : 0,
    increment : ()=>{},
    decrement : ()=> {}
})

export default context