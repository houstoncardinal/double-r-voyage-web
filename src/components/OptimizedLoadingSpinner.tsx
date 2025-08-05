
import React from 'react';

export const OptimizedLoadingSpinner = React.memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center space-y-4">
      <div className="loading-spinner"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
));

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';
