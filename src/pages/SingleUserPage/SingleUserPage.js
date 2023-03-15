import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {UserService} from "../../services/user.service";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [users,setUsers] = useState(state);
    useEffect(()=>{
        if (!state){
            UserService.getById(id).then(({data})=>setUsers(data))
        }else {
            setUsers(state)
        }

    },[state,id])

    return (
        <div>
            {users && <UserDetails users={users}/>}
        </div>
    );
};

export {SingleUserPage};