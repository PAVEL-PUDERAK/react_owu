import React, {useEffect, useState} from 'react';

import {User} from "./User";
import {userService} from "../services";

const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{


    },[])
    userService.getAll().then(({data})=> setUsers(data))
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};