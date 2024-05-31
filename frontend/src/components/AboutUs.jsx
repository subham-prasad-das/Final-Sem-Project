import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="w-full max-w-4xl mx-auto px-8 py-12 bg-white shadow-2xl rounded-2xl border border-gray-300">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md shadow-pink-500">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          Welcome to <span className="font-semibold text-indigo-600">The Insight Hub</span>, your go-to platform for insightful blogs and articles. Our mission is to provide a space where readers can find valuable information and diverse perspectives on various topics. We believe in the power of knowledge and aim to foster a community of curious minds. Our team is dedicated to delivering high-quality content that informs, inspires, and engages our audience. Thank you for being a part of our journey.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
