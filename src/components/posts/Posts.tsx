import {useEffect,useState} from "react";
import {getPosts} from "../services/axios";
import {ITS} from "../typesTS/ITS";
import Post from "../post/Post";

const Posts =()=>{

    let [posts,setPosts] = useState<ITS[]>([])

    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])




    return (
        <div>
            {
            posts.map(value => <Post {...value} key={value.id}/>)
        }
        </div>
    )


}

export default Posts