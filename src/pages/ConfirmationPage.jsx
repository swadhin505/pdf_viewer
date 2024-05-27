import React from 'react';

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Is the PDF alright?</h1>
      <div className="flex space-x-4">
        <button onClick={() => window.location.href = '/blank'} className="bg-green-500 text-white px-4 py-2 rounded">
          Yes
        </button>
        <button onClick={() => window.location.href = '/'} className="bg-red-500 text-white px-4 py-2 rounded">
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
