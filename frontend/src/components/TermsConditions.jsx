import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="w-full max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md shadow-pink-500">Terms and Conditions</h1>
        <p className="text-gray-700 leading-relaxed text-justify">
        <span className="font-semibold text-indigo-600">The Insight Hub</span> Terms and Conditions govern your use of our platform. By accessing our services, you agree to comply with these terms, which are designed to ensure a fair and enjoyable experience for all users. Please read these terms carefully to understand your rights and responsibilities. We reserve the right to update these terms at any time, so we encourage you to review them regularly. Thank you for being a part of our community and adhering to our guidelines.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
