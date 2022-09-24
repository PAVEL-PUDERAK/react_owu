import {useState} from "react";

import './App.css'
import {Posts, UserDetails, Users} from "./components";
import PostService from "./services/post.service";

function App() {

    const [userDetails,setUserDetails] = useState(null);

    const [posts,setPosts] = useState([]);
    const getUserId = (userId) => PostService.getPostByUserId(userId).then(({data}) => setPosts(data));


    return (
    <div>
        <div>
            <header className={'header'}><h1>UserInfo</h1></header>
            <div className={'users'}>
                <Users  setUserDetails={setUserDetails}/>
                {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId}/>}
            </div>
        </div>

        <div className={'posts'}>

            <Posts posts={posts}/>
        </div>

    </div>
  );
}

export default App;
