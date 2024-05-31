
// import {Route, Routes} from 'react-router-dom'
// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import PostDetails from './pages/PostDetails'
// import CreatePost from './pages/CreatePost'
// import EditPost from './pages/EditPost'
// import Profile from './pages/Profile'
// import {  UserContextProvider } from './context/UserContext'
// import MyBlogs from './pages/MyBlogs'



// const App = () => {


  
//   return (
//       <UserContextProvider>
//       <Routes>
//       <Route exact path="/" element={<Home/>}/>
//       <Route exact path="/login" element={<Login/>}/>
//       <Route exact path="/register" element={<Register/>}/>
//       <Route exact path="/write" element={<CreatePost/>}/>
//       <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
//       <Route exact path="/edit/:id" element={<EditPost/>}/>
//       <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
//       <Route exact path="/profile/:id" element={<Profile/>}/>
//       </Routes>
    
//       </UserContextProvider>
//   )
// }

// export default App


import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import { UserContextProvider } from './context/UserContext';
import MyBlogs from './pages/MyBlogs';
import Forum from './components/Forum';
import Support from './components/Support';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import TermsConditions from './components/TermsConditions';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';

const App = () => {
  return (
    <UserContextProvider>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/write" element={<CreatePost />} />
          <Route exact path="/posts/post/:id" element={<PostDetails />} />
          <Route exact path="/edit/:id" element={<EditPost />} />
          <Route exact path="/myblogs/:id" element={<MyBlogs />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/forum" element={<Forum />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/terms-conditions" element={<TermsConditions />} />
          <Route exact path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </UserContextProvider>
  );
};

export default App;
