import React,{useState} from 'react' 
import useCustomHook from '../hooks/useCustomHook'

function CounterOne() {
    const [count,setCount] = useState(0)

    

    return(
        <div> 
            <button onClick={()=>setCount(count+1)}>Click {count}</button>
            {useCustomHook(count)}
        </div>
    )

}

export default CounterOne
