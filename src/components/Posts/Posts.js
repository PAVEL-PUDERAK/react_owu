import React from 'react';
import {Post} from "../Post/Post";



const Posts = ({posts}) => {
    return (
        <div className={'ManyPost'}>
            {posts && posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};