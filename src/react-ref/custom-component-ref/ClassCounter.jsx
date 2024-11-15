import React from "react";

export default class ClassCounter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment(){
        this.setState((prevState)=>({count: prevState.count+1}))
    }

    decrement(){
        this.setState((prevState)=>({count: prevState.count-2}))
    }

    reset(){
        this.setState({count: 0})
    }

    render(){
        return (
            <h1>Count: {this.state.count}</h1>
        )
    }
}