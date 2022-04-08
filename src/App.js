import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";


function App() {
  return (
      <div>
          <div className={`users_posts`}>
             <div className={'users'}><Users/></div>
              <div className={'posts'}><Posts/></div>

          </div>
            <div className={'comments'}><Comments/></div>

      </div>
  );
}

export default App;
