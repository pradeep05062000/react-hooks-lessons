import React,{useState,useEffect} from 'react' 

function ConditionalUseEffect() {

    const[count,setCount] = useState(0)
    const[name,setName] = useState('')
    useEffect(
        () =>{
            document.title=`title is ${count}`
            console.log('useEffect executed')
        },[count]
    )

    return(
        <>
            <button onClick={()=> setCount(count+1)}>click {count}</button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            
        </>
        
    )
}


export default ConditionalUseEffect
