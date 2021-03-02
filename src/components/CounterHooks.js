import React,{useState} from 'react' 

function CounterHooks() {
    const [count,setCount] = useState(0)

    const incrementCountBy5 = () => {
        for(let i=0;i<5;i++){
            setCount(preState => preState + 1)
        }
    }

    return(
        <button onClick={incrementCountBy5}>Click {count}</button>
    )
}


export default CounterHooks