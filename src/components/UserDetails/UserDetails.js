import React from 'react';

const UserDetails = ({userDetails,getUserId}) => {
  const  {id ,name ,username ,email ,phone ,website} = userDetails;
    return (
        <div>

            <h2>UserDetails</h2>
            <h3>{name} {username}</h3>
            <p>
                {`${email} - ${phone} - ${website}`}
            </p>
            <button onClick={()=> {getUserId(id)}}>Show {username} Posts </button>
        </div>

    );
};

export {UserDetails};