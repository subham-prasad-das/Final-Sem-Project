import axios from "axios";
import Footer from "../components/Footer";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from '../components/Loader';
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen">
        <div className="px-8 md:px-20 py-8">
          {loader ? (
            <div className="h-[40vh] flex justify-center items-center">
              <Loader />
            </div>
          ) : !noResults ? (
            posts.map((post) => (
              <div key={post._id} className="mb-6">
                <Link to={user ? `/posts/post/${post._id}` : "/login"}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <HomePosts post={post} />
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h3 className="text-center font-bold text-2xl mt-16 text-gray-700">No posts available</h3>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;




// import axios from "axios";
// import Footer from "../components/Footer";
// import HomePosts from "../components/HomePosts";
// import Navbar from "../components/Navbar";
// import { URL } from "../url";
// import { useContext, useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Loader from '../components/Loader';
// import { UserContext } from "../context/UserContext";

// const Home = () => {
//   const { search } = useLocation();
//   const [posts, setPosts] = useState([]);
//   const [noResults, setNoResults] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const { user } = useContext(UserContext);

//   const fetchPosts = async () => {
//     setLoader(true);
//     try {
//       const res = await axios.get(URL + "/api/posts/" + search);
//       setPosts(res.data);
//       if (res.data.length === 0) {
//         setNoResults(true);
//       } else {
//         setNoResults(false);
//       }
//       setLoader(false);
//     } catch (err) {
//       console.log(err);
//       setLoader(true);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [search]);

//   return (
//     <>
//       <Navbar />
//       <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative px-4 py-8 md:px-20 min-h-screen flex flex-col">
//           {loader ? (
//             <div className="flex-grow flex justify-center items-center">
//               <Loader />
//             </div>
//           ) : !noResults ? (
//             posts.map((post) => (
//               <Link
//                 key={post._id}
//                 to={user ? `/posts/post/${post._id}` : "/login"}
//                 className="block mb-6 transition-transform transform hover:scale-105"
//               >
//                 <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg hover:shadow-xl">
//                   <HomePosts key={post._id} post={post} />
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <h3 className="text-center font-bold text-2xl mt-16 text-white">
//               No posts available
//             </h3>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

