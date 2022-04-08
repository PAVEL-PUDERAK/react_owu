import React, {useEffect, useState} from 'react';
import User from "./User";


const Users = () => {

   let [users,setUsers] = useState([])
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
            .then((value => value.json()))
            .then(value => setUsers(value));
    },[])
    return (
        <div>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    )};



export default Users;