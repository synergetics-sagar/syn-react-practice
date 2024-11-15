import React, { useState } from "react"

const SampelComponent = React.memo(({visible, setVisible})=>{
    console.log("Sample Component Rerendered")
    return (
        <div>
            <button onClick={()=>setVisible(false)}>Close</button>
            <h2>This is Sample Component</h2>
        </div>
    )
})

export default function ReactMemoExample(){
    
    let [count, setCount] = useState(0)
    let [visible, setVisible] = useState(true)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setVisible(true)}>Show Sample Component</button>
            {visible?<SampelComponent visible={visible} setVisible={setVisible} />:""}
        </div>
    )
}