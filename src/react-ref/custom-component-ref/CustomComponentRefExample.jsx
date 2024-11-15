import React, { createRef } from "react";
import ClassCounter from "./ClassCounter";

export default class CustomComponentRefExample extends React.Component{
    constructor(props){
        super(props)

        this.ClassCounterRef = createRef()
    }

    render(){
        return (
            <div>
                <ClassCounter ref={this.ClassCounterRef} />
                <button onClick={()=>this.ClassCounterRef.current.increment()}>+</button>
                <button onClick={()=>this.ClassCounterRef.current.decrement()}>-</button>
                <button onClick={()=>this.ClassCounterRef.current.reset()}>0</button>
            </div>
        )
    }
}