import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {PostService} from "../../services";
import {PostDetails} from "../../components";



const SinglePostPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [post,setPosts] = useState(state);
    useEffect(()=>{
        if (!state)
        PostService.getById(id).then(({data})=>setPosts(data));
        else {
            setPosts(state)
        }
    },[id,state])


    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};