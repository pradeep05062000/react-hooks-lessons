import React,{useContext} from 'react' 
import {NameContext,AgeContext} from "./UseContext";

function UseContextC() {
    const [name,surname] = useContext(NameContext)
    const age  = useContext(AgeContext)
    return (
        <>
            <h1>Name is {name}</h1>
            <h2>Surname is {surname}</h2>
            <h1> Age is {age}</h1>
        </>
    )
}

export default UseContextC