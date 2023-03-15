import React from 'react';

import {Button} from "../Button/Button";




const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div>
            {id}.{title} -  <Button to={`${id}`} state={post}>Get Details</Button>
        </div>
    );
};

export {Post};