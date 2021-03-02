import React,{useReducer,useEffect} from 'react' 
import Axios from 'axios'

const initialState = {
    post:{}
}
const reducer = (state,action) => {
    switch(action.type){
        case 'featch_data':
            return {
                post:action.payload
            }
        case 'no_data':
            return {
                post:action.payload
            }
        default:
            return state
    }
}

function FeatchDataUseReducer() {
    const[postValue,dispatch] = useReducer(reducer,initialState)

    useEffect(
        () => {
            Axios.get(
                "https://jsonplaceholder.typicode.com/posts/1"
                ).then(
                    response => {
                        dispatch({type:'featch_data',payload:response.data})
                    }
                ).catch(
                    e => {
                        dispatch({type:'no_data',payload:{title:'Something went wrong'}}) 
                    }
                )
        },[]
    )

    return(
        <div>
            {postValue.post.title ? <div>{postValue.post.title}</div>: "Loading...."}
        </div>
    )

}

export default FeatchDataUseReducer