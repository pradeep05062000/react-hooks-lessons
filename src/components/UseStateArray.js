import React,{useState} from 'react' 

function UseStateArray() {

    const[countVlaue,setCount] = useState(0)
    const[countArray,setArray] = useState([])
    

    const newValue = () => {
        
            setCount(preState => preState + 1)
        
        
        return countVlaue
    }

    const incrementCount = () => {
    
        setArray([...countArray,newValue()])
        
    }

    return(
        <>
        <button onClick={() => incrementCount()}>Increment count{countVlaue}</button>
        {
            countArray.map((count,index) => <div key={index}>{count}</div>)
            
        }
        
        </>
    )
}


export default UseStateArray