import React,{useState,useEffect} from 'react' 

function UseEffectOnlyOnce() {
    const[x,setX] = useState(0)
    const[y,setY] = useState(0) 

    const logMousePosition = (e) => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(
        ()=>{
            console.log("useEffect")
            window.addEventListener('mousemove',logMousePosition)

            return () => {
                window.removeEventListener('mousemove',logMousePosition)
            }

        },[]
    )
        

    return(
        <div>
            X:-{x}|
            Y:-{y}
            
        </div>
    )

}

export default UseEffectOnlyOnce