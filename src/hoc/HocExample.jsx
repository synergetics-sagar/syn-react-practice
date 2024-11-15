import { useState } from "react"

function Hoc(Component){
    const [count, setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count+1)
    }
    return function(props){
        return (
            <Component handleClick={handleClick} count={count} />
        )
    }
}

function Button({handleClick, count}){
    return (
        <button onClick={handleClick}>Count: {count}</button>
    )
}

export default function HocExample(){
    const ButtonComp = Hoc(Button)
    return (
        <ButtonComp />
    )
}