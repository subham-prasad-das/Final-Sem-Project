import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="w-full max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md shadow-pink-500">Privacy Policy</h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          At <span className="font-semibold text-indigo-600">The Insight Hub</span>, we value your privacy and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data. By using our platform, you consent to the practices described in this policy. We encourage you to review our Privacy Policy regularly to stay informed about any updates or changes. Your privacy is important to us, and we strive to handle your personal information with care and respect.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
