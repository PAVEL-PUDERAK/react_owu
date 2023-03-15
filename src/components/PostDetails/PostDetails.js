import React from 'react';

const PostDetails = ({post}) => {
    const {id,userId,title,body} = post;
    return (
        <div>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {PostDetails};