import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

const Comments = () => {
    let [comments,setComments] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((value => value.json()))
            .then(value => setComments(value)
            );
},[])
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;