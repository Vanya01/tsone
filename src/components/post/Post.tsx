import {ITS} from "../typesTS/ITS";
import React,{FC,MouseEvent} from "react";
import {Link} from "react-router-dom";


const Post:FC<ITS> = (props:ITS)=>{

    let {body,title,id,userId} = props

    let onClick =(e:MouseEvent<HTMLButtonElement>):void=>{
        console.log(e.clientY)
    }



    return(
        <div>
            <h3>{title} - {id}</h3>
            <p>{body} - {userId}</p>
            <button onClick={onClick}>Tap</button>

              <Link to={'/posts/' + id}> Details </Link>

        </div>
    )


}


export default Post