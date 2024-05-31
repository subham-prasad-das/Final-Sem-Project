
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import {ImCross} from 'react-icons/im'
// import { useContext, useState } from 'react'
// import { UserContext } from '../context/UserContext'
// import { URL } from '../url'
// import axios from 'axios'
// import { Navigate, useNavigate } from 'react-router-dom'

// const CreatePost = () => {
   
//     const [title,setTitle]=useState("")
//     const [desc,setDesc]=useState("")
//     const [file,setFile]=useState(null)
//     const {user}=useContext(UserContext)
//     const [cat,setCat]=useState("")
//     const [cats,setCats]=useState([])

//     const navigate=useNavigate()

//     const deleteCategory=(i)=>{
//        let updatedCats=[...cats]
//        updatedCats.splice(i)
//        setCats(updatedCats)
//     }

//     const addCategory=()=>{
//         let updatedCats=[...cats]
//         updatedCats.push(cat)
//         setCat("")
//         setCats(updatedCats)
//     }

//     const handleCreate=async (e)=>{
//         e.preventDefault()
//         const post={
//           title,
//           desc,
//           username:user.username,
//           userId:user._id,
//           categories:cats
//         }

//         if(file){
//           const data=new FormData()
//           const filename=Date.now()+file.name
//           data.append("img",filename)
//           data.append("file",file)
//           post.photo=filename
//           // console.log(data)
//           //img upload
//           try{
//             const imgUpload=await axios.post(URL+"/api/upload",data)
//             // console.log(imgUpload.data)
//           }
//           catch(err){
//             console.log(err)
//           }
//         }
//         //post upload
//         // console.log(post)
//         try{
//           const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
//           navigate("/posts/post/"+res.data._id)
//           // console.log(res.data)

//         }
//         catch(err){
//           console.log(err)
//         }
//     }



//   return (
//     <div>
//         <Navbar/>
//         <div className='px-6 md:px-[200px] mt-8'>
//         <h1 className='font-bold md:text-2xl text-xl '>Create a post</h1>
//         <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
//           <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none'/>
//           <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4'/>
//           <div className='flex flex-col'>
//             <div className='flex items-center space-x-4 md:space-x-8'>
//                 <input value={cat} onChange={(e)=>setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type="text"/>
//                 <div onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
//             </div>

//             {/* categories */}
//             <div className='flex px-4 mt-3'>
//             {cats?.map((c,i)=>(
//                 <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
//                 <p>{c}</p>
//                 <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
//             </div>
//             ))}
            
            
//             </div>
//           </div>
//           <textarea onChange={(e)=>setDesc(e.target.value)} rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'/>
//           <button onClick={handleCreate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
//         </form>

//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default CreatePost



import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserContext } from '../context/UserContext';
import { URL } from '../url';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setCats(updatedCats);
  };

  const addCategory = () => {
    if (cat.trim() !== "") {
      let updatedCats = [...cats];
      updatedCats.push(cat);
      setCat("");
      setCats(updatedCats);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;

      try {
        await axios.post(URL + "/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post(URL + "/api/posts/create", post, { withCredentials: true });
      navigate("/posts/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <div className="px-6 md:px-20 mt-8">
        <h1 className="font-bold md:text-3xl text-2xl text-gray-800 mb-6 text-center">Create a Post</h1>
        <form className="w-full flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200" onSubmit={handleCreate}>
          <input 
            onChange={(e) => setTitle(e.target.value)} 
            type="text" 
            placeholder="Enter post title" 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            onChange={(e) => setFile(e.target.files[0])} 
            type="file" 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <input 
                value={cat} 
                onChange={(e) => setCat(e.target.value)} 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter post category" 
                type="text" 
              />
              <div 
                onClick={addCategory} 
                className="bg-blue-600 text-white px-4 py-2 font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition"
              >
                Add
              </div>
            </div>
            <div className="flex flex-wrap">
              {cats?.map((c, i) => (
                <div key={i} className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full mr-2 mt-2">
                  <p>{c}</p>
                  <ImCross 
                    onClick={() => deleteCategory(i)} 
                    className="text-red-600 cursor-pointer" 
                  />
                </div>
              ))}
            </div>
          </div>
          <textarea 
            onChange={(e) => setDesc(e.target.value)} 
            rows={10} 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter post description" 
          />
          <button 
            type="submit" 
            className="bg-blue-600 w-full text-white font-semibold px-4 py-2 rounded-md md:w-1/4 mx-auto hover:bg-blue-700 transition text-lg"
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreatePost;
