import React,{useContext} from 'react' 
import UseReducerB from './UseReducerB'
import {countContext} from "../App";



function UseReducerA() {
    const countValue = useContext(countContext)
    return(
        <div>
            <div>Count value {countValue.count}</div>
            <button onClick={() => countValue.dispatch("increment")}>Increment</button>
            <button onClick={() => countValue.dispatch("decrement")}>Decrement</button>
            <button onClick={() => countValue.dispatch("reset")}>Reset</button>
            <UseReducerB countValue={countValue}/>
        </div>
    )
}

export default UseReducerA