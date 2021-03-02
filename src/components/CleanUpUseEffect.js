import React,{useState,useEffect} from 'react' 
import UseEffectOnlyOnce from './UseEffectOnlyOnce'
function CleanUpUseEffect() {

    const [display,setDisplay] = useState(true)

    

    return(
        <>
        <button onClick={() => setDisplay(false)}>Delete Component</button>
        {display && <UseEffectOnlyOnce />}
        </>
    )
}

export default CleanUpUseEffect