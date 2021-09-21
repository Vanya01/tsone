import {RouteComponentProps} from "react-router";

const PostDetails = (props:RouteComponentProps) => {
    let {history,location,match} = props
    console.log(props)

    return (
        <div>
            Post length  - {history.length} <br/>
            Post location key - {location.key}<br/>
            Post match URL - {match.url}
        </div>
    )
}


export default PostDetails