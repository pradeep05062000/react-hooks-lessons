import React,{ useReducer } from "react"; 

const initialState = {
    fistCounter:0
}
const reducer = (state,action) => {
    
    switch(action) {
        case "increment":
            return {fistCounter:state.fistCounter + 1}
        case "decrement":
            return {fistCounter:state.fistCounter + 1}
        case "reset":
            return initialState
        default:
            return state
    }

}

function UseReducerComplexState() {

const [count,dispatch] = useReducer(reducer,initialState)

    return(
        <div>
            <div>Count value {count.fistCounter}</div>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )

}

export default UseReducerComplexState