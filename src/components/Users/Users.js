import React, {useEffect, useState} from 'react';

import userService from "../../services/user.service";
import {User} from "../User/User";
const Users = ({setUserDetails}) => {
    const [users,setUsers] = useState([])
        useEffect(()=> {
            userService.getAll().then(({data})=> setUsers(data))
    },[])



    return (
        <div>
            {users.map((user)=> <User key={user.id} user = {user} setUserDetails={setUserDetails}/>)}
        </div>
    );
};

export {Users};