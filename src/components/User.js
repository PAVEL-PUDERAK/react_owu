import React from 'react';
const User = ({user}) => {

    const {id,name,username,email,phone,website,company} = user;

    return (
        <div className={'user'}>
            {id} - {name} - {username} - {email} - {phone} - {website} - {company.name}
        </div>
    );
};

export default User;