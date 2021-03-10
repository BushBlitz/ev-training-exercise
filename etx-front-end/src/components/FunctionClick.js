import React from 'react'

function clickHandler(){
    console.log('Button clicked')
}
function FunctionClick() {
    return (
        <div>
           <button onClick={clickHandler}>Click</button> 
        </div>
    )
}

export default FunctionClick
