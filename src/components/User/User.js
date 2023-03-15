import React from 'react';
import {Button} from "../Button/Button";

const User = ({user}) => {
    const {name,username, id} = user;
    return (
        <div>
            <div><h3>{username}</h3></div>
            <div><h2>{name}</h2></div>
            <Button to={`${id}`} state={user}>UserDetails</Button>
        </div>
    );
};

export {User};