import React, { useCallback, useMemo, useState } from "react"

const SampelComponent = React.memo(({themeStyle, resetCount})=>{
    console.log("Sample Component Rerendered")
    return (
        <div style={themeStyle}>
            <h2>This is Sample Component</h2>
            <button onClick={resetCount}>RESET Count</button>
        </div>
    )
})

export default function UseMemoExample(){
    
    let [count, setCount] = useState(0)
    let [theme, setTheme] = useState("light")
    const themeStyle = useMemo(()=>{
        return {
            background: theme=="light"?"white":"black",
            color: theme=="light"?"black":"white"
        }
    }, [theme])

    const resetCount = useCallback(()=>{
        setCount(0)
    }, [])
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setTheme(theme=="light"?"dark":"light")}>Switch Theme</button>
            <SampelComponent themeStyle={themeStyle} resetCount={resetCount}/>
        </div>
    )
}