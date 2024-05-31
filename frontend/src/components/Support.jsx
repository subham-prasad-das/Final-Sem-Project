import React from 'react';

const Support = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
      <div className="w-full max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md shadow-pink-500">Support</h1>
        <p className="text-gray-700 leading-relaxed text-justify mb-4">
          If you encounter any issues or have questions, our support team is here to help. Please feel free to reach out to us if you experience any problems while using <span className="font-semibold text-indigo-600">The Insight Hub</span>. We are committed to providing timely and effective assistance to ensure a smooth user experience.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mb-4">
          You can contact us via phone or email for support:
        </p>
        <p className="text-blue-500 mb-4">
          Phone: <a href="tel:+919090290224" className="hover:underline">+919090290224</a>
        </p>
        <p className="text-blue-500">
          Email: <a href="mailto:samitsuhan555@gmail.com" className="hover:underline">samitsuhan555@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Support;
