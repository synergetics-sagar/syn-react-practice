import React from "react";
export default class CounterDisplay extends React.Component{
    constructor(props){
        super(props)
        console.log("1. Constructor")
        this.state = {
            count: 0,
            running: false
        }
    }

    static getDerivedStateFromProps(updatedProps, prevState) {
        console.log("2. getDerivedStateFromProps")
        console.log("Updated Props", updatedProps, "Previous State", prevState)
        if(updatedProps.start!=prevState.running){
            return {
                running: updatedProps.start
            }
        }
        return null
    }

    componentDidMount(){
        console.log("4. Component Did Mount -> Running: ", this.state.running)
        if(this.state.running){
            this.startCounter()
        }
    }

    shouldComponentUpdate(updatedProps, updatedState){
        console.log("5. Should Component Update?", updatedState.count != this.state.count ||updatedState.running != this.state.running, updatedProps, updatedState)
        return updatedState.count != this.state.count ||updatedState.running != this.state.running
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("6. getSnapshotBeforeUpdate",prevProps, prevState)
        return prevState.count
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("7. Component Did Update")
        if(prevProps.start != this.props.start){
            this.setState({running: this.props.start}, ()=>{
                if(this.state.running){
                    this.startCounter()
                }
                else{
                    this.stopCounter()
                }
            })
        }
        console.log(`Count before update was: ${snapshot}`);
    }

    startCounter(){
        if(!this.timer){
            this.timer = setInterval(()=>{
                this.setState((prevState)=>({count: prevState.count+1}))
            }, 1000)
        }
    }

    stopCounter(){
        if(this.timer){
            clearInterval(this.timer)
            this.timer=null
        }
    }

    render(){
        console.log("3. Render")
        return (
            <div>
                Child Prop = Start: {JSON.stringify(this.props.start)} <br />
                Child State = Running: {JSON.stringify(this.state.running)} <br />
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}