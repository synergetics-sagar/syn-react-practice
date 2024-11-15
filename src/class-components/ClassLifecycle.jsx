import React from "react";

export default class ClassLifecycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      console.log("Constructor")
    }
  
    static getDerivedStateFromProps(props, state) {
      // Example: update state based on props
      console.log("getDerivedStateFromProps", props, state)
      return null;
    }
  
    componentDidMount() {
      // Fetch data or set up subscriptions
      console.log("ComponentDidMount")
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      // Decide whether to re-render or not
      console.log("shouldComponentUpdate", nextProps, nextState)
      return true;
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // Capture information before DOM changes
      console.log("getSnapshotBeforeUpdate", prevProps, prevState)
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // Perform updates based on prop or state changes
      console.log("componentDidUpdate", prevProps, prevState, snapshot)

    }
  
    componentWillUnmount() {
      // Clean up tasks
      console.log("componentWillUnmount")

    }
  
    render() {
        console.log("Render")

      return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={()=>this.setState({...this.state, count: this.state.count+1})}>+</button>
        </div>);
    }
  }
  