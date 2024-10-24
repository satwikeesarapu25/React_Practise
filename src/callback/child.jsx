import React from "react"
function Child(){
    console.log('rerednering..')
    return(
        <>
        <p>hello</p>

        </>
    )
}
export default React.memo(Child)