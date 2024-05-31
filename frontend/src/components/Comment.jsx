// import axios from "axios"
// import { BiEdit } from "react-icons/bi"
// import { MdDelete } from "react-icons/md"
// import { URL } from "../url"
// import { useContext } from "react"
// import { UserContext } from "../context/UserContext"

// const Comment = ({c,post}) => {

//   const {user}=useContext(UserContext)
//   const deleteComment=async(id)=>{
//     try{
//       await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
//       window.location.reload(true)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
//   // console.log(post.userId)
//   // console.log(user._id)
//   // console.log(post)
//   // console.log(user)
//   return (
//     <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
//            <div className="flex items-center justify-between">
//             <h3 className="font-bold text-gray-600">@{c.author}</h3>
//             <div className="flex justify-center items-center space-x-4">
//             <p>{new Date(c.updatedAt).toString().slice(0,15)}</p>
//             <p>{new Date(c.updatedAt).toString().slice(16,24)}</p>
//             {user?._id===c?.userId ?
//               <div className="flex items-center justify-center space-x-2">
//                     <p className="cursor-pointer" onClick={()=>deleteComment(c._id)}><MdDelete/></p>
//                 </div>:""}
                
//             </div>
//            </div>
//            <p className="px-4 mt-2">{c.comment}</p>

//            </div>
//   )
// }

// export default Comment

import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { URL } from "../url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Comment = ({ c, post }) => {
  const { user } = useContext(UserContext);

  const deleteComment = async (id) => {
    try {
      await axios.delete(URL + "/api/comments/" + id, { withCredentials: true });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{c.author}</h3>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-gray-500">
            {new Date(c.updatedAt).toLocaleDateString()}{" "}
            {new Date(c.updatedAt).toLocaleTimeString()}
          </p>
          {user?._id === c?.userId && (
            <button
              onClick={() => deleteComment(c._id)}
              className="text-red-500 focus:outline-none"
            >
              <MdDelete />
            </button>
          )}
        </div>
      </div>
      <p className="text-gray-800 mt-2">{c.comment}</p>
    </div>
  );
};

export default Comment;
