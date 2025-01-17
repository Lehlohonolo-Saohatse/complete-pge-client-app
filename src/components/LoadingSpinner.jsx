import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Spinning Circle */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        
        {/* Company Name */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Putsoa Global Enterprise
          </h1>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-24 bg-blue-600 rounded"></div>
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;