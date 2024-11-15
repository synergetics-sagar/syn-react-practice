import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

export default function Counter() {

    let [start, setStart] = useState(false)
    return (
        <div>
            Parent State = Start: {JSON.stringify(start)} <br />
            <button onClick={()=>setStart(start?false:true)}>Toggle Timer</button>
            <CounterDisplay start={start} />
        </div>
    )
    
}