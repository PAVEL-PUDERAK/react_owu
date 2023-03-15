import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {UserService} from "../../services/user.service";
import {User} from "../../components";
import css from './userspage.module.css'



const UsersPage = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        UserService.getAll().then(({data})=>setUsers(data))
    },[])

    return (
        <div className={css.users_details}>
           <div>{users.map(user=><User key={user.id} user={user}/>)}</div>
            <div><Outlet/></div>

        </div>
    )
};

export {UsersPage};