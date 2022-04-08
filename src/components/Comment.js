import React from 'react';

const Comment = ({comment}) => {
    const {id,postId,name,email,body} = comment


    return (
        <div className={'comment'}>
            {id} <br/> {postId} <br/> {name} <br/> {email} <br/> {body}
        </div>
    );
};

export default Comment;