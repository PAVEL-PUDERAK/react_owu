import React from 'react';
import css from './userDetails.module.css'

const UserDetails = ({users}) => {
    const {name,username,address,phone,website,company } = users;
    return (
        <div className={css.user_det}>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <li>{address.city}</li>
            <li>{phone}</li>
            <li>{website}</li>
            <li>{company.name}</li>

        </div>
    );
};

export {UserDetails};