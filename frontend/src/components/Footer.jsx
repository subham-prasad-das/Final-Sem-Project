// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <>
//       <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8">
//         <div className="flex flex-col text-white space-y-2">
//           <Link to="/featured" className="hover:underline">Featured Blogs</Link>
//           <Link to="/most-viewed" className="hover:underline">Most Viewed</Link>
//           <Link to="/readers-choice" className="hover:underline">Readers Choice</Link>
//         </div>

//         <div className="flex flex-col text-white space-y-2">
//           <Link to="/forum" className="hover:underline">Forum</Link>
//           <Link to="/support" className="hover:underline">Support</Link>
//           <Link to="/recent-posts" className="hover:underline">Recent Posts</Link>
//         </div>

//         <div className="flex flex-col text-white space-y-2">
//           <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
//           <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
//         </div>
//       </div>
//       <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @The Insight Hub 2023</p>
//     </>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-900 px-8 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="flex flex-col space-y-4">
            <Link to="/forum" className="hover:text-gray-400">Forum</Link>
            <Link to="/support" className="hover:text-gray-400">Support</Link>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/about" className="hover:text-gray-400">About Us</Link>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Link to="/terms-conditions" className="hover:text-gray-400">Terms & Conditions</Link>
            <Link to="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800 py-4">
        <p className="text-center text-gray-400 text-sm">
          All rights reserved @The Insight Hub 2024
        </p>
      </div>
    </>
  );
};

export default Footer;

