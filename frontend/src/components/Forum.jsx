import React from 'react';

const Forum = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="w-full max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md shadow-pink-500">Forum</h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          Welcome to <span className="font-semibold text-indigo-600">The Insight Hub</span> Forum! This is a space for our community to engage in meaningful discussions, share ideas, and connect with others who have similar interests. Whether you're looking for advice, want to share your knowledge, or just wish to chat with fellow readers, our forum is the place to be. Please remember to be respectful and considerate of others' opinions. Let's build a positive and supportive community together. Feel free to start a new topic or join an existing discussion!
        </p>
      </div>
    </div>
  );
};

export default Forum;
