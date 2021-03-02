import React,{useState,useRef, useEffect} from 'react' 


function UseRef() {

    const [interval,setInt] = useState(0)
    const intervalRef = useRef()
    const [showCounter,setShow] = useState(true)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setInt(preState => preState + 1)
        }, 1000);

        
    },[])

    return (
        <div>
            Counter - {interval}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear counter</button>
        </div>
    )

}

export default UseRef