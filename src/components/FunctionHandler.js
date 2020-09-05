import React from 'react'

function FunctionHandler() {

    function handelClick(){
        console.log('button clicked')
    }

    return (
        <div>
            <button onClick={handelClick} >Click</button>
        </div>
    )
}

export default FunctionHandler
