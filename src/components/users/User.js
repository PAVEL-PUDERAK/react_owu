import React from 'react';

const User = ({user}) => {
const {name, username, email, phone, website} = user;

    return (
        <div>
            <h3>{name}</h3>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <button>SHOW POST</button>
        </div>
    );
};

export {User};