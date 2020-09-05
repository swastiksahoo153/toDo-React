import React from 'react'

const Child = (props) => {
    console.log("this is",props)
    return (
        <div>
            <button onClick={()=>props.Handler("HHHH")}>Greet Parent</button>
        </div>
    )
}

export default Child
