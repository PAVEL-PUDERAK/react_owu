import React, {useEffect, useState} from 'react';
import {PostService} from "../../services";
import {Outlet} from "react-router-dom";
import {Post} from "../../components";


const PostsPage = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(()=>{
       PostService.getAll().then(({data})=>setPosts(data))
    },[])

    return (
        <div style={{display:'flex'}}>
            <div>{posts.map(post=><Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};