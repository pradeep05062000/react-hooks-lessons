import React,{useState,useEffect} from 'react' 
import Axios from 'axios'
function FeacthDataUseEffect() {
    const [posts,setPosts] = useState([]) 

    useEffect(
        () => {
            Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(
                response => {
                    setPosts(response.data)
                }
            ).catch(
                error => console.log(error)
            )
        },[]
    )

    return(
        <>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </>
    )
}

export default FeacthDataUseEffect