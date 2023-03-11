import {Routes,Route,Navigate} from  'react-router-dom'
import {MainLayout} from "./Layouts/MainLayout/MainLayout";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";



function App() {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/home'}/>}/>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'about'} element={<AboutPage/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>

        </Route>
      </Routes>
  );
}

export default App;
