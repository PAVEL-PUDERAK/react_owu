import React from 'react';

const User = ({user,setUserDetails}) => {
   const {name,username} = user;

    return (
        <div>
            <div>
            <h3>{`${name} ${username}`}</h3>
                <button onClick={() => setUserDetails(user) }>Click</button>
            </div>
        </div>

    );
};

export {User};