// import { Link, useNavigate } from "react-router-dom"
// import Footer from "../components/Footer"
// import { useContext, useState } from "react"
// import axios from "axios"
// import { URL } from "../url"
// import { UserContext } from "../context/UserContext"


// const Login = () => {
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [error,setError]=useState(false)
//   const {setUser}=useContext(UserContext)
//   const navigate=useNavigate()

//   const handleLogin=async()=>{
//     try{
//       const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
//       // console.log(res.data)
//       setUser(res.data)
//       navigate("/")

//     }
//     catch(err){
//       setError(true)
//       console.log(err)

//     }

//   }
//   return (
//     <>
//     <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
//     <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
//     <h3><Link to="/register">Register</Link></h3>
//     </div>
// <div className="w-full flex justify-center items-center h-[80vh] ">
//        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
//          <h1 className="text-xl font-bold text-left">Log in to your account</h1>
//          <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
//          <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
//          <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Log in</button>
//          {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
//          <div className="flex justify-center items-center space-x-3">
//           <p>New here?</p>
//           <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
//          </div>
//        </div>
//     </div>
//     <Footer/>
//     </>
    
//   )
// }

// export default Login


import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true });
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-20 py-4 bg-gray-200 shadow-md">
        <h1 className="text-lg md:text-xl font-extrabold text-[#ff6347]">
          <Link to="/">The Insight Hub</Link>
        </h1>
        <h3 className="text-[#4682b4] hover:text-blue-800">
        <Link to="/register">
      <button className="bg-[#4682b4] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
        Register
      </button>
    </Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] bg-gray-300">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[30%] p-8 bg-gray-300 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-left text-[#550]">Log in to your account</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 text-lg font-bold text-white bg-[#20b2aa] rounded-lg hover:bg-[#40e0d0] transition"
          >
            Log in
          </button>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <p>New here?</p>
            <p className="text-[#4682b4] hover:underline">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
