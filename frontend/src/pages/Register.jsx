// import { Link, useNavigate } from "react-router-dom"
// import Footer from "../components/Footer"
// import { useState } from "react"
// import axios from 'axios'
// import {URL} from '../url'


// const Register = () => {

//   const [username,setUsername]=useState("")
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [error,setError]=useState(false)
//   const navigate=useNavigate()

//   const handleRegister=async ()=>{
    
//     try{
//       const res=await axios.post(URL+"/api/auth/register",{username,email,password})
//       setUsername(res.data.username)
//       setEmail(res.data.email)
//       setPassword(res.data.password)
//       setError(false)
//       navigate("/login")
      
//     }
//     catch(err){
//       setError(true)
//       console.log(err)
//     }

//   }

  

//   return (
//     <>
//       <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
//     <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
//     <h3><Link to="/login">Login</Link></h3>
//     </div>
//     <div className="w-full flex justify-center items-center h-[80vh] ">
//        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
//          <h1 className="text-xl font-bold text-left">Create an account</h1>
//          <input onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your username" />
//          <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
//          <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
//          <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Register</button>
//          {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
//          <div className="flex justify-center items-center space-x-3">
//           <p>Already have an account?</p>
//           <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
//          </div>
//        </div>
//     </div>
//     <Footer/>
//     </>
    
//   )
// }

// export default Register


import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from 'axios';
import { URL } from '../url';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post(URL + "/api/auth/register", { username, email, password });
      setError(false);
      navigate("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-20 py-4 bg-gray-300 shadow-md">
        <h1 className="text-lg md:text-xl font-extrabold text-[#ff6347]">
          <Link to="/">The Insight Hub</Link>
        </h1>
        <h3 className="text-[#4682b4] hover:text-blue-800">
          <Link to="/login"><button className="bg-[#4682b4] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
        Login
      </button></Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] bg-gray-300">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[30%] p-8 bg-gray-300 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-left text-[#20b2aa]">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your username"
          />
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
            onClick={handleRegister}
            className="w-full px-4 py-2 text-lg font-bold text-white bg-[#20b2aa] rounded-lg hover:bg-[#40e0d0] transition"
          >
            Register
          </button>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <p>Already have an account?</p>
            <p className="text-[#4682b4] hover:underline">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
