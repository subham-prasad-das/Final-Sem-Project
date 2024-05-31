import React from 'react';

const TermsOfService = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="w-full max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md shadow-pink-500">Terms of Service</h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          Our Terms of Service outline the agreement between you and <span className="font-semibold text-indigo-600">The Insight Hub</span> regarding the use of our platform. These terms include important information about your rights, obligations, and limitations while using our services. By using <span className="font-semibold text-indigo-600">The Insight Hub</span>, you agree to comply with these terms, which are intended to maintain the integrity and functionality of our community. We encourage you to review our Terms of Service regularly, as they may be updated to reflect changes in our practices or for legal and regulatory reasons. Your continued use of our platform signifies your acceptance of these terms. Thank you for respecting our guidelines and helping us create a positive user experience.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
