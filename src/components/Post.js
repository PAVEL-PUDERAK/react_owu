import React from 'react';

const Post = ({post}) => {
    const {id,userId,title,body} = post;
    return (
        <div className={'post'}>
            {id} <br/> {userId} <br/> {title} <br/> {body}

        </div>
    );
};

export default Post;