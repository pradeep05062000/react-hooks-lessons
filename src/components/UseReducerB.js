import React,{useContext} from 'react' 

import {countContext} from "../App";


function UseReducerB(props) {
    // const countValue = useContext(countContext)
    return(
        <div>
            
            <button onClick={() => props.countValue.dispatch("increment")}>Increment</button>
            <button onClick={() => props.countValue.dispatch("decrement")}>Decrement</button>
            <button onClick={() => props.countValue.dispatch("reset")}>Reset</button>
            
        </div>
    )
}

export default UseReducerB