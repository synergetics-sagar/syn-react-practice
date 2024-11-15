import { connect } from "react-redux"
import { decrement, increment, reset } from "./reduxLegacyCounterActions"

function ReduxLegacyCounter({count, increment, decrement, reset}) {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>increment(2)}>+</button>
            <button onClick={()=>decrement(1)}>-</button>
            <button onClick={reset}>RESET</button>

            <table></table>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    increment, decrement, reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxLegacyCounter)