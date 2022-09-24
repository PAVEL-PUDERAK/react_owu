import React from 'react';

const Post = ({post}) => {
    const {userid,title,body} = post;
    return (
        <div>
            <div className={'post'}>
                <h4>{userid}</h4>
                <p>{title}</p>
                <p>{body}</p>

            </div>
        </div>
    );
};

export {Post};