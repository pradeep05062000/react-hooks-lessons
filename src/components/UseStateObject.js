import React,{useState} from 'react'

function UseStateObject() {

    const [person,setName] = useState({name:'',age:''})

    return(
        <>
            <label>Name</label>
            <input value={person.name} onChange={e => setName({...person,name :e.target.value})}/>
            <label>Age</label>
            <input value={person.age} onChange={(e) => setName({...person,age :e.target.value})}/>

            <h1>Name:{person.name}</h1>
            <h1>Age:{person.age}</h1>
        </>
    )
}

export default UseStateObject