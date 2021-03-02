import React,{useState,useEffect} from 'react' 

function UseEffect() {

    const[count,setCount] = useState(0)

    useEffect(
        () =>document.title=`title is ${count}`
    )

    return(
        <button onClick={()=> setCount(count+1)}>click {count}</button>
    )
}


export default UseEffect
