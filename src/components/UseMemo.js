import React,{useState,useMemo} from 'react' 

function UseMemo() {

    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)
    const [value,setValue] = useState('Even')


    const checkValue = async () => {
        setCounterOne(
            preState =>  preState + 1
        )
        
    }

    const isEven = useMemo(() => {
        for(let i=0;i<200000000;)i++
        return counterOne % 2 === 0 ? true : false
    },[counterOne])

    return(
        <div>
            <button onClick={() => checkValue()}>CounterOne {counterOne}</button>
            <span >{isEven? "Even":"Odd"}</span>
            <button onClick={()=>setCounterTwo(counterTwo+1)}>CounterTwo {counterTwo}</button>
            
        </div>
    )

} 

export default UseMemo